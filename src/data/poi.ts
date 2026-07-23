// Structured POI data for Faro Marina (Doca de Faro).
// Single source of truth used by BaseLayout JSON-LD, Hero, QuickInfo, etc.

export const poi = {
  name: { pt: 'Faro Marina', en: 'Faro Marina', zh: '法鲁码头' },
  alternateName: { pt: 'Doca de Faro', en: 'Doca de Faro', zh: 'Doca de Faro' },

  address: 'Praça Dom Francisco Gomes, 8000-168 Faro, Portugal',
  streetAddress: 'Praça Dom Francisco Gomes',
  city: 'Faro',
  region: 'Algarve',
  country: 'Portugal',
  countryCode: 'PT',

  rating: 4.4,
  reviews: 5181,

  lat: 37.0154,
  lng: -7.9347,

  // Official Google Maps short link for Faro Marina.
  mapsUrl: 'https://maps.app.goo.gl/XPFdhSB6k3LhYxe8A',

  opening: { pt: 'Aberto 24 horas', en: 'Open 24 hours', zh: '全天开放' },
  category: { pt: 'Frente Marítima', en: 'Waterfront', zh: '海滨' },

  heroImage: '/gallery/faro-marina-1.jpg',
};

export type Poi = typeof poi;
