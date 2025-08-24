import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-e2a9c828c4954065a9f5dd87ecc83a78.r2.dev",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
