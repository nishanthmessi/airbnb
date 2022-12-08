/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'links.papareact.com']
  },
  env: {
    MAP_TOKEN: process.env.MAP_TOKEN
  }
}

module.exports = nextConfig
