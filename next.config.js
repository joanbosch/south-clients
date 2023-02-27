/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es'
  }
}

module.exports = nextConfig
