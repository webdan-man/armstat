import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    // Local backend runs on localhost/private IP; Next's image optimizer can block these in dev.
    // Serving images directly avoids "url parameter is not allowed" / "private ip" errors.
    unoptimized: true,
    remotePatterns: [
      // Backend-served uploads (hostname may vary by env)
      { protocol: 'http', hostname: 'localhost', pathname: '/uploads/**' },
      { protocol: 'http', hostname: 'localhost', port: '4002', pathname: '/uploads/**' },
      { protocol: 'http', hostname: '127.0.0.1', pathname: '/uploads/**' },
      { protocol: 'http', hostname: '127.0.0.1', port: '4002', pathname: '/uploads/**' },
      { protocol: 'https', hostname: 'localhost', pathname: '/uploads/**' },
      { protocol: 'https', hostname: '127.0.0.1', pathname: '/uploads/**' },
    ],
  },
};
export default nextConfig;
