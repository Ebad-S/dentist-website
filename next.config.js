/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Optimize for production
  swcMinify: true,
  // Improve performance
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Enable static exports for better performance on Vercel
  output: 'standalone',
}

module.exports = nextConfig 