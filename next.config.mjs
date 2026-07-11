/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // The World Cup lifeline moved to /2026/world-cup; middleware maps
      // both forms for the lifeline subdomain.
      {
        source: "/world-cup-2026",
        destination: "/2026/world-cup",
        permanent: true,
      },
      {
        source: "/lifeline/world-cup-2026",
        destination: "/lifeline/2026/world-cup",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
