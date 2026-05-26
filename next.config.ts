import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel deployment — full Next.js runtime, no static export needed
  // (swap back to output:"export" + trailingSlash:true for cPanel hosting)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
