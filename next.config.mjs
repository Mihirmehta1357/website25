const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  // Remove swcMinify - it's enabled by default in Next.js 13+
  // swcMinify: true,
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Add output configuration for better Heroku compatibility
  output: 'standalone',
  
  // Optimize for production
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
