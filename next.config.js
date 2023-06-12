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
    DOMAIN_PROD: "https://greedyshop.onrender.com",
    DOMAIN_DEV: "http://localhost:8000",
  },
};

module.exports = nextConfig;
