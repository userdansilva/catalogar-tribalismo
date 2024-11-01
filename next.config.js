/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'catalogar-storage.s3.sa-east-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'copy-catalogar.s3.sa-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
