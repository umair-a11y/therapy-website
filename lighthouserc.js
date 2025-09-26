module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        'http://localhost:3001/',
        'http://localhost:3001/about',
        'http://localhost:3001/services',
        'http://localhost:3001/contact',
        'http://localhost:3001/book-consultation',
        'http://localhost:3001/anxiety-support',
        'http://localhost:3001/pricing'
      ],
      settings: {
        preset: 'desktop'
      }
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 0.95 }],

        // Specific performance metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 3000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],

        // Accessibility requirements
        'color-contrast': 'error',
        'image-alt': 'error',
        'label': 'error',
        'heading-order': 'error',

        // SEO requirements
        'meta-description': 'error',
        'document-title': 'error',
        'crawlable-anchors': 'error',

        // Security and best practices
        'is-on-https': 'off', // Disabled for local testing
        'no-vulnerable-libraries': 'error',
        'errors-in-console': 'warn'
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};