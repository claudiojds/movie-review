import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "images-assets.nasa.gov" },
      { hostname: "cdn.pixabay.com" },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      }
    ]
  }
};

export default nextConfig;
