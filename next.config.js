import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Note: We'll use a fallback for security headers since ES modules can't import TS directly
// The security headers are primarily handled by middleware.ts anyway

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === 'production'

// Modern Next.js 15 + React 19 optimizations

/** @type {import('next').NextConfig} */
const nextConfig = {
  // React 19 Strict Mode (enabled by default in App Router but explicit for clarity)
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,
  },

  // Modern performance optimizations
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-accordion',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-select',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      'framer-motion',
      '@tanstack/react-query',
    ],
  },

  // Modern Turbopack configuration
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },

  outputFileTracingRoot: path.join(__dirname),

  // Force cache invalidation: 2025-01-16T19:45:00Z
  generateBuildId: () => {
    return `build-${Date.now()}`
  },

  // Enhanced image optimization
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
  },

  async headers() {
    return [
      {
        // Apply unified security headers to all routes
        // Note: CSP uses report-only mode in development for easier debugging
        // Production uses enforcing mode with nonce support via middleware
        source: '/(.*)',
        headers: [
          {
            key: isProd ? 'Content-Security-Policy' : 'Content-Security-Policy-Report-Only',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: blob: https:; font-src 'self' https: data:; connect-src 'self' https:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; upgrade-insecure-requests;"
          },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/relationship-counseling',
        destination: '/relationship-therapy',
        permanent: true,
      },
      // Legacy services subpaths to canonical routes
      { source: '/services/anger-management', destination: '/anger-management', permanent: true },
      { source: '/services/anxiety', destination: '/anxiety-support', permanent: true },
      { source: '/services/burnout', destination: '/stress-burnout', permanent: true },
      { source: '/services/adhd', destination: '/adhd-support', permanent: true },
      { source: '/services/relationships', destination: '/relationship-therapy', permanent: true },
      { source: '/services/depression', destination: '/depression-support', permanent: true },
    ]
  },
}

export default nextConfig;
