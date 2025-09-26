# Testing Documentation

This document provides comprehensive information about the automated testing setup for the therapy website, including visual regression testing and accessibility auditing.

## Overview

Our testing strategy includes:
- **Visual Regression Testing**: Ensures UI consistency across deployments
- **Accessibility Auditing**: Validates WCAG 2.1 AA compliance using axe-core
- **Cross-browser Testing**: Tests across Chromium, Firefox, and WebKit
- **Responsive Testing**: Validates layouts on desktop and mobile viewports

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- All project dependencies installed (`npm install`)

### Running Tests

```bash
# Run all tests
npm run test:e2e

# Run tests with browser visible (headed mode)
npm run test:e2e:headed

# Run tests in UI mode for debugging
npm run test:e2e:ui

# Update visual snapshots
npm run test:update-snapshots
```

## Test Structure

### Visual Regression Tests (`visual-regression.spec.ts`)

Tests visual consistency across key pages and components:

**Desktop Tests (1280x800)**
- Full page screenshots for all major routes
- Component-specific screenshots (header, footer, forms)
- Responsive breakpoint testing

**Mobile Tests (390x844)**
- Mobile-optimized layouts
- Touch-friendly interface validation

**Key Routes Tested:**
- Homepage (`/`)
- Service pages (`/anxiety-support`, `/depression-support`, etc.)
- Location pages (`/toronto`, `/ottawa`)
- Assessment pages (`/assessment/stress`, `/assessment/depression`, etc.)
- Content pages (`/about`, `/articles`, `/contact`)

### Accessibility Tests (`accessibility.spec.ts`)

Comprehensive WCAG 2.1 AA compliance testing:

**Automated Scans:**
- Critical and serious violations cause test failures
- Moderate and minor violations logged for review
- Focus management and keyboard navigation
- Color contrast validation
- ARIA attribute verification

**Focused Tests:**
- Navigation menu keyboard accessibility
- Assessment form accessibility
- Image alt text validation
- Touch target sizing (mobile)

## Configuration

### Playwright Configuration (`playwright.config.ts`)

```typescript
// Key configuration options
{
  baseURL: 'http://localhost:3000',
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  fullyParallel: true,

  // Projects for different browsers/viewports
  projects: [
    'chromium-desktop', 'chromium-mobile',
    'firefox-desktop', 'webkit-desktop',
    'Mobile Chrome', 'Mobile Safari'
  ]
}
```

### Global Setup (`global-setup.ts`)

Handles test environment initialization:
- Mock Unsplash API responses for consistent visual tests
- Replace dynamic images with deterministic placeholders
- Configure test-specific environment variables

## Handling Dynamic Content

### Unsplash Images
Dynamic images are replaced with consistent placeholders during testing:

```javascript
// Mock implementation in global-setup.ts
await page.route('**/api.unsplash.com/**', async (route) => {
  const mockResponse = {
    urls: {
      small: 'https://picsum.photos/400/300?seed=consistent',
      regular: 'https://picsum.photos/800/600?seed=consistent'
    }
  };
  await route.fulfill({ body: JSON.stringify(mockResponse) });
});
```

### Dynamic Timestamps
Hide elements that change frequently:

```css
.dynamic-timestamp,
.current-year,
.unsplash-attribution {
  visibility: hidden !important;
}
```

## CI/CD Integration

### GitHub Actions Workflow (`.github/workflows/ci-cd.yml`)

**Test Jobs:**
1. **Build & Test**: ESLint, build verification, basic E2E tests
2. **Visual Tests**: Cross-browser visual regression testing
3. **Accessibility Audit**: Comprehensive accessibility validation
4. **Security Scan**: Dependency and security vulnerability checks

**Deployment Flow:**
1. All tests must pass before deployment
2. Visual tests run in parallel across browsers
3. Accessibility results posted as PR comments
4. Production deployment only on main branch

### Environment Variables

Required for CI/CD:
```bash
# GitHub Secrets
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your-key
UNSPLASH_SECRET_KEY=your-secret
UNSPLASH_APPLICATION_ID=your-id
VERCEL_TOKEN=your-vercel-token
ORG_ID=your-org-id
PROJECT_ID=your-project-id
```

## Troubleshooting

### Common Issues

#### Visual Test Failures
```bash
# Update snapshots when legitimate UI changes occur
npm run test:update-snapshots

# Run specific test in headed mode for debugging
npx playwright test visual-regression.spec.ts --headed --project=chromium-desktop
```

#### Accessibility Test Failures
```bash
# Run accessibility tests with detailed output
npx playwright test accessibility.spec.ts --reporter=html

# Debug specific accessibility issues
npm run test:e2e:ui
```

#### Flaky Tests
1. **Dynamic Content**: Ensure all dynamic elements are properly mocked
2. **Timing Issues**: Add appropriate wait conditions
3. **Network Dependencies**: Mock external API calls

### Debugging Commands

```bash
# Generate test report
npx playwright show-report

# Run single test file
npx playwright test visual-regression.spec.ts

# Run tests matching pattern
npx playwright test --grep "homepage"

# Run with specific browser
npx playwright test --project=chromium-desktop

# Debug mode with browser
npx playwright test --debug
```

## Test Maintenance

### Adding New Pages
1. Add route to `routes` array in test files
2. Update CI/CD workflow if needed
3. Run initial test to generate baseline screenshots
4. Review and commit new snapshots

### Updating Visual Baselines
```bash
# When UI changes are intentional
npm run test:update-snapshots

# Update specific test
npx playwright test visual-regression.spec.ts --update-snapshots
```

### Accessibility Standards

**Violation Severity:**
- **Critical**: Test failure, immediate fix required
- **Serious**: Test failure, fix before deployment
- **Moderate**: Warning, fix in next sprint
- **Minor**: Advisory, fix when convenient

**WCAG Compliance Levels:**
- Level A: Basic accessibility
- Level AA: Standard compliance (our target)
- Level AAA: Enhanced accessibility

## Performance Monitoring

### Lighthouse Integration
Automated performance auditing on deployment:
- Performance score ≥ 80
- Accessibility score ≥ 95
- Best practices score ≥ 90
- SEO score ≥ 90

### Key Metrics Tracked
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- Time to Interactive (TTI)

## Best Practices

### Writing Tests
1. **Stable Selectors**: Use data-testid or semantic selectors
2. **Wait Conditions**: Always wait for network idle or specific elements
3. **Isolation**: Each test should be independent
4. **Descriptive Names**: Clear test descriptions for maintenance

### Visual Testing
1. **Consistent Viewports**: Use standard viewport sizes
2. **Mock Dynamic Content**: Replace timestamps, random content
3. **Cross-browser**: Test on all supported browsers
4. **Responsive**: Test both desktop and mobile layouts

### Accessibility Testing
1. **Keyboard Navigation**: Test all interactive elements
2. **Screen Readers**: Ensure proper ARIA labels
3. **Color Contrast**: Verify text readability
4. **Focus Management**: Logical tab order

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [axe-core Accessibility Rules](https://dequeuniversity.com/rules/axe/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Lighthouse Performance](https://developers.google.com/web/tools/lighthouse)

## Support

For testing issues or questions:
1. Check this documentation
2. Review GitHub Actions logs
3. Run tests locally with debug flags
4. Check Playwright trace viewer for failed tests