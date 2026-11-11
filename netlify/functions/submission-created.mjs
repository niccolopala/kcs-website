// Runs automatically every time a Netlify form is submitted (event-triggered function).
// Emails the submission through Resend, so notifications can go to any address
// (Netlify's own notifications only allow Netlify team members).
//
// Netlify environment variables (Project configuration → Environment variables):
//   RESEND_API_KEY  required. From resend.com → API Keys.
//   NOTIFY_TO       required. Comma-separated inboxes, e.g. "n.pala@kentcontentstudios.com,james@…"
//   NOTIFY_FROM     optional. Defaults to "KCS Website <website@kentcontentstudios.com>".
//                   The domain must be verified in Resend.

// Code emailed to people who sign up through the first-booking popup. Keep in step with src/data/site.ts (offer.code).
const OFFER_CODE = process.env.OFFER_CODE || 'KCS10';

const FORM_LABELS = {
  'first-booking-offer': 'New popup sign-up (10% offer)',
  enquiry: 'New enquiry',
  'mailing-list': 'New mailing list sign-up',
  'kitchen-interest': 'New Kitchen Studio interest',
};

// Fields Netlify adds that the team doesn't need to see.
const HIDDEN = new Set(['form-name', 'company-website', 'ip', 'user_agent', 'referrer']);

const escape = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const pretty = (key) => key.replace(/[-_]/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

export async function handler(event) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = (process.env.NOTIFY_TO || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  if (!apiKey || to.length === 0) {
    console.error('submission-created: RESEND_API_KEY or NOTIFY_TO is not set, no email sent.');
    return { statusCode: 200, body: 'not configured' };
  }

  const { payload } = JSON.parse(event.body || '{}');
  const formName = payload?.form_name || payload?.data?.['form-name'] || 'form';
  const data = payload?.data || {};
  const fields = Object.entries(data).filter(([k, v]) => !HIDDEN.has(k) && String(v ?? '').trim() !== '');

  const who = data.name || data.email || 'Someone';
  const subject = `${FORM_LABELS[formName] || `New ${formName} submission`}: ${who}${data.space ? ` (${data.space})` : ''}`;

  const rows = fields
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#666;vertical-align:top;white-space:nowrap">${escape(pretty(k))}</td>` +
        `<td style="padding:6px 0;color:#0A0A0A;white-space:pre-wrap">${escape(v)}</td></tr>`,
    )
    .join('');
  const html =
    `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5">` +
    `<p style="margin:0 0 12px"><strong>${escape(subject)}</strong></p>` +
    `<table style="border-collapse:collapse">${rows}</table>` +
    (data.email ? `<p style="margin:16px 0 0;color:#666">Press Reply to answer ${escape(data.email)} directly.</p>` : '') +
    `</div>`;
  const text = fields.map(([k, v]) => `${pretty(k)}: ${v}`).join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.NOTIFY_FROM || 'KCS Website <website@kentcontentstudios.com>',
      to,
      subject,
      html,
      text,
      ...(data.email ? { reply_to: data.email } : {}),
    }),
  });

  if (!res.ok) {
    console.error('submission-created: Resend error', res.status, await res.text());
    return { statusCode: 200, body: 'email failed' };
  }

  // Popup sign-ups also get their discount code by email.
  if (formName === 'first-booking-offer' && data.email) {
    const site = 'https://kentcontentstudios.com';
    const codeHtml =
      `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#0A0A0A;max-width:520px">` +
      `<p>Thanks for signing up. Here's your code for <strong>10% off your first booking</strong> at Kent Content Studios:</p>` +
      `<p style="font-size:28px;font-weight:bold;letter-spacing:3px;background:#F5F5F5;border-left:4px solid #C0281E;padding:14px 18px;margin:20px 0">${OFFER_CODE}</p>` +
      `<p><strong>How to use it:</strong> book online as normal and enter <strong>${OFFER_CODE}</strong> in the discount code box. We'll take 10% off your final invoice, or refund the difference if you've paid in full.</p>` +
      `<p>One use per customer, new customers only.</p>` +
      `<p><a href="${site}/contact" style="color:#C0281E;font-weight:bold">See the studios and book →</a></p>` +
      `<p>Questions? Just reply to this email.</p>` +
      `<p>Nick &amp; James<br>Kent Content Studios<br>The Feed Store, Lynx Park, Cranbrook TN17 2LR</p>` +
      `<p style="font-size:12px;color:#777">You're getting this because you asked for a discount code on our website. Reply "unsubscribe" and we'll take you off our list.</p>` +
      `</div>`;
    const codeRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.OFFER_FROM || 'Kent Content Studios <hello@kentcontentstudios.com>',
        to: [data.email],
        reply_to: to[0],
        subject: `Your 10% code: ${OFFER_CODE}`,
        html: codeHtml,
        text: `Your code for 10% off your first booking at Kent Content Studios: ${OFFER_CODE}\n\nBook online as normal and enter ${OFFER_CODE} in the discount code box. We'll take 10% off your final invoice, or refund the difference if you've paid in full. One use per customer, new customers only.\n\n${site}/contact\n\nReply "unsubscribe" and we'll take you off our list.`,
      }),
    });
    if (!codeRes.ok) console.error('submission-created: code email failed', codeRes.status, await codeRes.text());
  }
  return { statusCode: 200, body: 'sent' };
}
