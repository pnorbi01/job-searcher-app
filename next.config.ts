import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobicy.com",
      },
      {
        protocol: "https",
        hostname: "**.jobicy.com",
      },
    ],
  },
};

export default nextConfig;
