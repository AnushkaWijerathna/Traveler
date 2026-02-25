import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add valid Next.js config options here if needed
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "taz8lza1ru.ufs.sh",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
