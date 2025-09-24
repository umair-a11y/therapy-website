module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Force cache invalidation: 2025-01-16T19:45:00Z
  generateBuildId: () => {
    return `build-${Date.now()}`
  },
}
