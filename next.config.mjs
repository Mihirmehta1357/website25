/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  // Remove the experimental.turbo setting - it's not needed
  // experimental: {
  //   turbo: false,
  // },
  reactStrictMode: true,
  swcMinify: true,
  // Add these production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
};

export default nextConfig;
