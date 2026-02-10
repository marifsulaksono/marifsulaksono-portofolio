/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep server-only dependencies as externals so Next doesn't bundle them into
  // server vendor chunks that can go missing in some environments.
  serverExternalPackages: ["@sanity/client"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
