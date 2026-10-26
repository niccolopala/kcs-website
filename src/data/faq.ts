// All FAQ copy lives here so the FAQ page, home page and studio pages stay in sync.
// `home: true` shows the question on the home page; `podcast: true` on the Podcast Studio page;
// `cove: true` on the Infinity Room page.

export type Faq = {
  q: string;
  a: string;
  home?: boolean;
  podcast?: boolean;
  cove?: boolean;
};

export type FaqGroup = { id: string; title: string; soon?: boolean; items: Faq[] };

export const faqGroups: FaqGroup[] = [
  {
    id: 'booking',
    title: 'Booking and payment',
    items: [
      { q: 'Do your prices include VAT?', a: 'No. All prices on our website exclude VAT.', home: true },
      {
        q: 'How do deposits work?',
        a: 'A 50% deposit confirms your booking. The remaining 50% is due 48 hours before your session.',
        home: true,
      },
      {
        // TODO: replace with the full cancellation policy from James.
        q: 'Can I reschedule or cancel?',
        a: "You get one free reschedule with at least 48 hours' notice. Further reschedules may carry a £75 admin fee. Our full cancellation policy is coming soon.",
        home: true,
      },
      {
        q: 'What if we run over time?',
        a: "If nobody is booked in after you, you can extend at the studio's standard hourly rate. If the next client is waiting, we'll need to wrap up on time.",
      },
      {
        q: 'Can I book evenings or weekends?',
        a: 'Yes. Weekday evenings are charged at a 20% premium and weekends at 30%. Get in touch to book out-of-hours sessions directly.',
      },
      {
        q: 'How can I pay?',
        a: 'By credit or debit card (yes, we take Amex), or ask for an invoice and pay by bank transfer.',
      },
      {
        q: 'Is there a minimum term on the Content Plan?',
        a: "Yes. It's £495 a month on a 6-month term, or £545 a month if you'd rather commit to 3 months.",
      },
    ],
  },
  {
    id: 'hire',
    title: 'Studio hire',
    items: [
      {
        q: 'Do I need any technical knowledge?',
        a: "None at all. Our team runs the kit and guides you through every step. You're in safe hands.",
        home: true,
      },
      {
        q: "What's included when I hire a studio?",
        a: 'Unless you book dry hire, your session includes our studio lighting, cameras and props, plus a dedicated engineer. On dry hire you bring your own camera and lighting. In the White Infinity Room we can supply paper backdrops and some lights for a small rental charge.',
      },
      {
        q: 'Can I bring my own crew or kit?',
        a: "Yes. Just let us know who's coming and what you're bringing before your session.",
        cove: true,
      },
      {
        q: 'Is setup time included?',
        a: "Yes, and it doesn't come out of your time. We set up before your slot starts, so you just sit down, give us five minutes for sound and camera checks, and go.",
        podcast: true,
      },
      {
        q: 'How quickly do I get my files?',
        a: 'Raw files and your synced multi-cam master within 48 hours. Edited episodes and clips within 5 working days, with two rounds of changes. We keep your raw files for 6 months.',
        home: true,
      },
      { q: 'Can I have a tour before I book?', a: "Of course. Get in touch to arrange a time. We don't take walk-ins.", home: true },
      {
        q: 'Can we bring food and drink?',
        a: "Yes. There's a breakout kitchen on site with a fridge, microwave and a decent coffee machine. Please skip anything with a strong smell. Food isn't allowed in the podcast studio, and we may charge for cleaning after spills or for damage to equipment.",
      },
    ],
  },
  {
    id: 'podcast',
    title: 'Podcast Studio',
    items: [
      { q: 'How many people can you seat?', a: 'Up to 4.' },
      {
        q: 'Can we brand the set?',
        a: 'Yes. Talk to us before your session. Bring your own logo and props, or we can design and build signage for you.',
        podcast: true,
      },
      { q: 'Can we switch sets mid-session?', a: 'Yes. The changeover time counts towards your booked hours.', podcast: true },
      { q: 'Who runs my session?', a: "Nick or James, the founders of KCS. If you're really lucky, you'll get both." },
      { q: 'Can you livestream a recording?', a: "Not yet. We're aiming to launch livestreaming in early 2027.", podcast: true },
    ],
  },
  {
    id: 'cove',
    title: 'White Infinity Room',
    items: [
      { q: 'How big is the cove?', a: 'The cove itself is approximately 4.5m × 4.0m.', cove: true },
      {
        q: 'Are lights included?',
        a: 'No. Bring your own, or add our lights and paper backdrops to your booking for a small rental charge.',
        cove: true,
      },
      { q: 'Will someone from KCS be there?', a: 'Yes. A member of our team is on site at all times, including on dry hire.', cove: true },
      { q: 'How many people can use the space?', a: 'Up to 10, though 4 to 5 is most comfortable.' },
      { q: 'What power is available?', a: 'Four standard 230V sockets: two at floor level and two at ceiling height.', cove: true },
      {
        q: 'What if the cove gets marked or damaged?',
        a: 'Under our hire terms we can charge for damage, breakages, or cleaning and repainting in extreme cases.',
        cove: true,
      },
    ],
  },
  {
    id: 'kitchen',
    title: 'Kitchen Studio',
    soon: true,
    items: [
      {
        q: 'When does the kitchen studio open?',
        a: "It's being built now. Register your interest and you'll be the first to hear when it opens, along with pricing.",
      },
    ],
  },
  {
    id: 'getting-here',
    title: 'Getting here',
    items: [
      {
        q: 'Where are you?',
        a: 'The Feed Store, Lynx Park Business Centre, Colliers Green Road, Cranbrook, Kent TN17 2LR. what3words: ///keen.intrigued.dazzling',
      },
      {
        q: 'How long does it take to get here?',
        a: 'By car: Tunbridge Wells 25 min, Maidstone 30 min, Sevenoaks 35 min, central London around 1 hour 30. By train: London Bridge to Marden in 48 min, direct.',
      },
      {
        q: 'How do I get here from the station?',
        a: 'Marden station is a 7-minute drive. Pre-book a local taxi: Enroute Taxis 0333 444 6060, Kent Cars 01892 832252 or Streamline 01622 750000.',
      },
      {
        q: 'Is there parking?',
        a: "Plenty, on site. Tell us how many cars you're bringing on your pre-booking form and we'll save you space.",
      },
      {
        q: 'Is the studio accessible?',
        a: "Yes. We're wheelchair friendly and have toilets on site. Let us know about any access needs on your pre-booking form.",
        podcast: true,
      },
      { q: 'What are your opening hours?', a: 'Monday to Friday, 9am to 6pm. Evenings and weekends by arrangement.' },
    ],
  },
];

export const allFaqs = faqGroups.flatMap((g) => g.items);
