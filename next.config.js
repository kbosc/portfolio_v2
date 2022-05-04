/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  experimental: {
    // externalDir: true,
    images: {
      layoutRaw: true,
    },
  },
}