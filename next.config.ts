import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_ENV: process.env.NEXT_PUBLIC_ENV,
    API_BASE_URL: process.env.API_BASE_URL,
  },
};

export default nextConfig;
