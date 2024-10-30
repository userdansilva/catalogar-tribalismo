/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "catalogar-storage.s3.sa-east-1.amazonaws.com",
      "copy-catalogar.s3.sa-east-1.amazonaws.com"
    ]
  }
}

module.exports = nextConfig
