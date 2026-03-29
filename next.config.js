/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['experiments-download-site.vercel.app'],
    },
  },
};

module.exports = nextConfig;
