
const withNextIntl = require('next-intl/plugin')(
  './src/config/i18n.ts'
);

module.exports = withNextIntl({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ]
  },
});