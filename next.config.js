/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['es', 'en', 'pt', 'ca'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
