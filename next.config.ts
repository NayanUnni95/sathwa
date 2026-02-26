import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "organize-sathwa-bucket.s3.us-east-1.amazonaws.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
