# Kent Content Studios website

Static site built with [Astro](https://astro.build) and Tailwind CSS, deployed on Netlify.

## Run it locally

```
npm install
npm run dev
```

Then open http://localhost:4321.

## Where to change things

| What | File |
| --- | --- |
| Address, email, opening hours, booking link | `src/data/site.ts` |
| Prices and packages | `src/data/pricing.ts` |
| FAQ questions and answers (feeds home, studio pages and FAQ page) | `src/data/faq.ts` |
| Brand colours and fonts | `src/styles/global.css` |
| Pages | `src/pages/` |

## Still to do before launch

- Replace every grey placeholder (`MediaPlaceholder`) with real photos and video
- Add the hero showreel video
- Swap `bookingUrl` in `src/data/site.ts` for the Cal.com link and embed Cal.com on `/contact`
- Add the full cancellation policy to `src/data/faq.ts`
- Add a real client quote on the home page
- Add the map embed in the "Why come to Kent?" section

## Forms

The enquiry and kitchen-interest forms use Netlify Forms. Submissions show in the Netlify dashboard under **Forms**. Turn on email notifications there so nothing gets missed.

## Deploying

Netlify builds from the `main` branch automatically (`npm run build`, publish folder `dist`).
