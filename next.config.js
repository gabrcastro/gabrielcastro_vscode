

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
