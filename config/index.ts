export default {
  /**
   * Nextra metadata configuration
   * @see https://nextra.vercel.app/docs/metadata
   */
  metadata: {
    title: {
      default: 'ECTickets Resource Centre',
      template: '%s | ECTickets Resource Centre',
    },
    description:
      'This is a centralized hub for all resources related to ECTickets, including documentation, tutorials, and support materials to help you get the most out of our services.',
    metadataBase: new URL('https://resource.ectickets.com/'),
    keywords: ['ECTickets', 'Ticketing', 'Hong Kong Tickets'],
    generator: 'Next.js',
    applicationName: 'ECTickets Resource Centre',
    appleWebApp: {
      title: 'ECTickets Resource Centre',
    },
    openGraph: {
      url: './',
      siteName: 'ECTickets Resource Centre',
      locale: 'en_US',
      type: 'website',
    },
    other: {
      'msapplication-TileColor': '#fff',
    },
    alternates: {
      canonical: './',
    },
  },
  /**
   * Nextra Layout component configuration
   */
  nextraLayout: {
    docsRepositoryBase: 'https://github.com/ltobywongl/ectickets-resource/blob/main',
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
  },
  /**
   * Main Layout head configuration
   */
  head: {
    mantine: {
      defaultColorScheme: 'dark',
      nonce: '8IBTHwOdqNKAWeKl7plt8g==',
    },
  },

  /**
   * Release notes configuration
   * This is used to link the release notes in the app.
   */
  releaseNotes: {
    url: 'https://www.ectickets.com',
  },
  /**
   * Search configuration (for pagefind)
   * This is used to configure the search engine API.
   * @see /app/api/search/route.ts
   */
  search: {
    queryKeyword: 'q',
    minQueryLength: 3,
    limitKeyword: 'limit',
    defaultMaxResults: 5,
    excerptLengthKeyword: 'excerptLength',
    defaultExcerptLength: 30,
    defaultLanguage: 'en',
  },
  /**
   * Supported languages configuration
   */
  languages: [{ code: 'en', name: 'English' }],
} as const;
