import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    dynamicIO:false,
    authInterrupts:true,
  },
};

export default nextConfig;
