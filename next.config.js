const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/scorecard-portal" : "",
  assetPrefix: isProduction ? "/scorecard-portal" : "",
};

module.exports = nextConfig;
