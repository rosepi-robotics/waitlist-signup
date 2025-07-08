/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Preserve URL query parameters including gclid
  async redirects() {
    return []
  },
  // Ensure gclid is passed to all pages
  trailingSlash: false,
}

export default nextConfig
