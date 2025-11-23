import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.workora.ae'),
  title: {
    default: 'Workora | Professional Manpower Supply Solutions in UAE',
    template: '%s | Workora Manpower Supply'
  },
  description: 'Leading manpower supply company in UAE. Workora provides skilled & unskilled labor for construction, hospitality, logistics, cleaning services across Dubai, Abu Dhabi, Sharjah. Licensed & compliant.',
  keywords: [
    // Core services
    'manpower supply UAE',
    'manpower supply Dubai',
    'manpower supply Abu Dhabi',
    'manpower supply Sharjah',
    'labor supply UAE',
    'workforce solutions UAE',

    // Industry-specific
    'construction labor UAE',
    'construction workers Dubai',
    'hospitality staff UAE',
    'hotel staff recruitment Dubai',
    'cleaning services UAE',
    'logistics workers UAE',
    'warehouse staff Dubai',
    'retail staff UAE',

    // Service types
    'skilled labor UAE',
    'unskilled labor UAE',
    'temporary workers UAE',
    'contract workers Dubai',
    'manpower outsourcing UAE',

    // Location-specific
    'manpower company Dubai',
    'manpower company Abu Dhabi',
    'labor supply company UAE',
    'recruitment agency UAE',

    // Compliance & quality
    'licensed manpower supplier UAE',
    'MOL approved manpower',
    'reliable workforce solutions',
  ],
  authors: [{ name: 'Workora Manpower Supply L.L.C.' }],
  creator: 'Workora Manpower Supply L.L.C.',
  publisher: 'Workora Manpower Supply L.L.C.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.workora.ae',
    siteName: 'Workora Manpower Supply',
    title: 'Workora | Professional Manpower Supply Solutions in UAE',
    description: 'Leading manpower supply company in UAE providing skilled & unskilled labor for construction, hospitality, logistics across Dubai, Abu Dhabi, Sharjah.',
    images: [
      {
        url: '/images/home/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Workora Manpower Supply - Professional Workforce Solutions in UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workora | Professional Manpower Supply Solutions in UAE',
    description: 'Leading manpower supply company in UAE providing skilled & unskilled labor for construction, hospitality, logistics.',
    images: ['/images/home/hero.jpg'],
  },
  alternates: {
    canonical: 'https://www.workora.ae',
  },
  verification: {
    google: 'eJpxnDIimwsCn28-aIMYrlMpDRxvkGlDfZTmgfTpaR8',
  },
}; 