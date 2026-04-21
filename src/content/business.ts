export const business = {
  name: 'Hometown Heating & Air',
  shortName: 'Hometown H&A',
  tagline: 'Family HVAC in Louisville — Jim and Nate Barker since 2006',
  phone: '(502) 555-0174',
  phoneTel: '5025550174',
  email: 'hello@hometownheatingair.com',
  address: {
    street: '4445 Shelbyville Rd',
    city: 'Louisville',
    state: 'KY',
    zip: '40207',
    full: '4445 Shelbyville Rd, Louisville, KY 40207',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am–5:30pm',
    saturday: 'Sat: 9am–2pm',
    emergency: '24/7 Emergency Service',
    display: 'Mon–Fri 8am–5:30pm, Sat 9am–2pm, 24/7 Emergency',
  },
  founded: 2006,
  owner: 'Jim Barker',
  ownerTitle: 'Owner / NATE Certified',
  license: 'KY HVAC License #HM-04421, EPA 608 Certified',
  rating: 4.9,
  reviewCount: 203,
  serviceAreas: [
    'Louisville',
    'Jeffersontown',
    'St. Matthews',
    'Middletown',
    'Prospect',
    'Goshen',
    'LaGrange',
    'Shelbyville',
  ],
  team: [
    { name: 'Jim Barker', role: 'Owner / NATE Certified', imageSeed: 'jim-barker' },
    { name: 'Nate Barker', role: 'Son / HVAC Tech', imageSeed: 'nate-barker' },
    { name: 'Wanda Mills', role: 'Dispatcher', imageSeed: 'wanda-mills' },
  ],
  social: {
    facebook: 'https://www.facebook.com/hometownheatingair',
    instagram: 'https://www.instagram.com/hometownheatingair',
    google: 'https://g.page/hometownheatingair',
  },
} as const

export type Business = typeof business
