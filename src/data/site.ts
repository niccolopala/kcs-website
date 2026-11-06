// Single source of truth for business details used across the site.
export const site = {
  name: 'Kent Content Studios',
  motto: "Let's create something worth watching",
  email: 'hello@kentcontentstudios.com',
  instagram: 'https://www.instagram.com/kentcontentstudios',
  instagramHandle: '@kentcontentstudios',
  // Google Ads tag. Only loads after a visitor accepts cookies (see CookieBanner).
  googleAdsId: 'AW-18558782023',
  // Conversion label from Google Ads → Goals → Conversions, e.g. 'AW-18558782023/AbC-dEfGhIj'.
  // Fired on /thanks after an enquiry. Leave empty until the conversion action exists.
  googleAdsEnquiryConversion: 'AW-18558782023/PdCiCNmytbMdEMeUwpFF',
  // Fired when someone clicks through to a Cal.com booking page.
  googleAdsBookingConversion: 'AW-18558782023/PLXFCNfitrMdEMeUwpFF',
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
  // which links to each Podcast Studio and Infinity Room booking on Cal.com, plus the enquiry form.
  bookingUrl: '/contact',
};

// Cal.com booking links for the Podcast Studio and Infinity Room. Company bookings needing an invoice use the enquiry form.
// If a link's URL slug changes in Cal.com, update it here and it updates everywhere on the site.
const cal = 'https://cal.com/kentcontentstudios';
export const calLinks = {
  episodePackage: `${cal}/episode-package`,
  studioSession: `${cal}/studio-session`,
  batchSession: `${cal}/batch-session`,
  fullDay: `${cal}/full-day`,
  coveTwoHours: `${cal}/infinity-2hour`,
  coveHalfDay: `${cal}/infinity-room-half-day`,
  coveFullDay: `${cal}/infinity-room-full-day`,
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
