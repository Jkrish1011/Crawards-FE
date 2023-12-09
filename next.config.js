/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.twitter.com/:path*',
      },
    ]
  },
  reactStrictMode: true,
  webpack :config => {
    config.resolve.fallback = {fs: false, tls: false, net: false};
    return config;
  },
  images: {
    domains: ['']
  }
}

module.exports = nextConfig
