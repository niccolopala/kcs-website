// All prices ex VAT.

export const podcastPlans = [
  {
    name: 'Studio Session',
    price: '£295',
    unit: '',
    body: 'Two hours. Engineer, three cameras, lighting. Raw files and a synced multi-cam master within 48 hours.',
    forWho: 'For teams with their own editor',
    cta: 'Book a session',
    featured: false,
  },
  {
    name: 'Episode Package',
    price: '£595',
    unit: '',
    body: 'Studio Session plus a fully edited episode (up to 60 min) and 5 captioned vertical clips. Edits within 5 working days.',
    forWho: 'For firms that want to walk out and publish',
    cta: 'Book an episode',
    featured: true,
  },
  {
    name: 'Content Plan',
    price: '£495',
    unit: '/month',
    body: 'One Episode Package a month. Fixed slot, same set and engineer, priority booking. 6-month term, or £545/month over 3 months. Two episodes: £950/month.',
    forWho: 'For a regular show or LinkedIn series',
    cta: 'Start a plan',
    featured: false,
  },
];

export const podcastExtras =
  'Need longer? Extra hour £120 · Batch Session (4 hrs) £495 · Full day (8 hrs) £850. Evenings +20%, weekends +30%, by arrangement.';

export const podcastAddOns = [
  { name: 'Episode edit', detail: 'up to 60 min, camera switching, colour, audio clean-up', price: '£195' },
  { name: 'Social clip pack', detail: '5 captioned vertical clips', price: '£150' },
  { name: 'Extra clips', detail: '', price: '£25 each' },
  { name: 'Live line-cut', detail: 'cameras switched live, same-day file', price: '£95' },
  { name: 'Audio-only podcast edit', detail: '', price: '£95' },
  { name: 'Second episode, same session', detail: 'edit + 5 clips', price: '£295' },
];

export const covePrices = [
  { label: 'Per hour', note: '2 hour minimum', price: '£40' },
  { label: 'Half day', note: '4 hours', price: '£140' },
  { label: 'Full day', note: '8 hours', price: '£270' },
];
