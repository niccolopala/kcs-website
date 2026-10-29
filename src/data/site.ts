// Single source of truth for business details used across the site.
export const site = {
  name: 'Kent Content Studios',
  motto: "Let's create something worth watching",
  email: 'hello@kentcontentstudios.com',
  instagram: 'https://www.instagram.com/kentcontentstudios',
  instagramHandle: '@kentcontentstudios',
  podcastName: 'Behind The Brand',
  address: {
    line1: 'The Feed Store, Lynx Park Business Centre',
    line2: 'Colliers Green Road',
    town: 'Cranbrook',
    county: 'Kent',
    postcode: 'TN17 2LR',
    what3words: 'keen.intrigued.dazzling',
  },
  hours: 'Mon–Fri, 9am–6pm',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Lynx+Park+Business+Centre+Colliers+Green+Road+Cranbrook+TN17+2LR',
  // General "Check availability" buttons go to the booking hub on /contact,
  // which links to each Podcast Studio package on Cal.com and the cove enquiry form.
  bookingUrl: '/contact',
};

// Cal.com booking links (Podcast Studio only for now; the Infinity Room books via the enquiry form).
// If a link's URL slug changes in Cal.com, update it here and it updates everywhere on the site.
const cal = 'https://cal.com/kentcontentstudios';
export const calLinks = {
  episodePackage: `${cal}/episode-package`,
  studioSession: `${cal}/studio-session`,
  batchSession: `${cal}/batch-session`,
  fullDay: `${cal}/full-day`,
  tour: `${cal}/studio-tour`,
};

export const nav = [
  { label: 'Podcast Studio', href: '/podcast-studio' },
  { label: 'Infinity Room', href: '/infinity-room' },
  { label: 'Kitchen Studio', href: '/kitchen-studio', soon: true },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/faq' },
];

export const driveTimes = [
  { from: 'Tunbridge Wells', time: '25 min' },
  { from: 'Maidstone', time: '30 min' },
  { from: 'Sevenoaks', time: '35 min' },
  { from: 'Central London', time: '1h 30' },
];
