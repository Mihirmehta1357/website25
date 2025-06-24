/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  experimental: {
    turbo: false, // ⛔ Disable Turbopack to avoid unexpected dev crashes
  },
  reactStrictMode: true, // ✅ Optional but recommended for catching bugs
  swcMinify: true,        // ✅ Makes production builds faster
};

export default nextConfig;
