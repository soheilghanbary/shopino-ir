/** @type {import("next").NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})

module.exports = withPWA({
  reactStrictMode: true,
  optimizeFonts: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "uploadthing.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  experimental: {
    serverActions: true,
  },
})
