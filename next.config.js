const isProduction = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? "/scorecards" : "",
  assetPrefix: isProduction ? "/scorecards" : "",
};

module.exports = nextConfig;
