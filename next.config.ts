import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    // Helpful for local dev where backend runs on a different port.
    // In production you can rely on remotePatterns for tighter control.
    domains: ['localhost', '127.0.0.1'],
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
