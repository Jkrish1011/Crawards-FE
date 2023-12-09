/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack :config => {
    config.resolve.fallback = {fs: false, tls: false, net: false};
    return config;
  },
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = nextConfig
