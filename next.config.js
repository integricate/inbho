/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // SEO-friendly configuration
  poweredByHeader: false,
  compress: true,
}

module.exports = nextConfig
