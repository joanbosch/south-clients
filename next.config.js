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
  },
  async headers () {
    return [
      {
        // matching all API routes
        source: process.env.API_BASE_PATH,
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.southoriginal.com',
        port: '',
        pathname: '/wp-content/uploads/**'
      }
    ]
  }
}

module.exports = nextConfig
