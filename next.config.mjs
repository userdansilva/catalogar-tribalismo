/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "catalogar-storage.s3.sa-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "copy-catalogar.s3.sa-east-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
