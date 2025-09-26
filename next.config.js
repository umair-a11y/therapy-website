const isProd = process.env.NODE_ENV === 'production'

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: blob: https:",
  "font-src 'self' https: data:",
  "connect-src 'self' https:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
  'report-uri /api/csp/report',
].join('; ')

function buildSecurityHeaders() {
  const headers = []
  headers.push({
    key: isProd ? 'Content-Security-Policy' : 'Content-Security-Policy-Report-Only',
    value: cspDirectives,
  })
  headers.push({ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' })
  headers.push({ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' })
  headers.push({ key: 'X-Content-Type-Options', value: 'nosniff' })
  headers.push({ key: 'X-Frame-Options', value: 'DENY' })
  headers.push({ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' })
  return headers
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force cache invalidation: 2025-01-16T19:45:00Z
  generateBuildId: () => {
    return `build-${Date.now()}`
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'source.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: buildSecurityHeaders(),
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

module.exports = nextConfig
