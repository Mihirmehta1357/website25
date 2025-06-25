const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  
  // Add output configuration for better Heroku compatibility
  output: 'standalone',
  
  // Remove this section - it's causing the critters error:
  // experimental: {
  //   optimizeCss: true,
  // },
};

export default nextConfig;
