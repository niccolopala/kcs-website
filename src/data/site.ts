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
  // Swap this for the real Cal.com booking link once it exists.
  bookingUrl: '/contact',
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
