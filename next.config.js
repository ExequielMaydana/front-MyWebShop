/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  env: {
    DOMAIN_PROD: "http://localhost:8000",
    DOMAIN_DEV: "//greedyshop.onrender.com"
  },
};

module.exports = nextConfig;
