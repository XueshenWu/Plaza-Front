import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";
const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
        bodySizeLimit: '10mb',
    }
  },
  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname:'upload.wikimedia.org',
        
      }
    ]
  },
  experimental:{
    serverActions:{
      bodySizeLimit: '10mb'
    }
  }
};

export default nextConfig;
