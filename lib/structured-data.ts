// Structured Data (Schema.org) helpers for SEO

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
    areaServed: string;
    availableLanguage: string[];
  };
  sameAs: string[];
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: {
    '@type': string;
    name: string;
  };
  description: string;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item?: string;
  }>;
}

export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Workora Manpower Supply L.L.C.',
    url: 'https://www.workora.ae',
    logo: 'https://www.workora.ae/workora-logo.png',
    description: 'Leading manpower supply company in UAE providing skilled and unskilled labor for construction, hospitality, logistics, and more.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sultan Business Centre, Oud Metha',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-4-221-2833',
      contactType: 'Customer Service',
      email: 'info@workora.ae',
      areaServed: 'AE',
      availableLanguage: ['English', 'Arabic'],
    },
    sameAs: [
      'https://www.linkedin.com/company/workora-manpower-supply/',
    ],
  };
}

export function getServiceSchema(serviceName: string, description: string): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Workora Manpower Supply L.L.C.',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    description,
  };
}

export function getBreadcrumbSchema(items: Array<{ name: string; url?: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.workora.ae',
    name: 'Workora Manpower Supply L.L.C.',
    image: 'https://www.workora.ae/workora-logo.png',
    url: 'https://www.workora.ae',
    telephone: '+971-4-221-2833',
    email: 'info@workora.ae',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sultan Business Centre, Oud Metha',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Dubai',
      },
      {
        '@type': 'City',
        name: 'Abu Dhabi',
      },
      {
        '@type': 'City',
        name: 'Sharjah',
      },
    ],
  };
}
