/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [{
    source: '/',
    destination: '/player',
    permanent: false
  }]
}



module.exports = nextConfig
