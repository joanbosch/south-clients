/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
