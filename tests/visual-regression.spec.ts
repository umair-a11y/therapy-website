import { test, expect } from '@playwright/test';

// Key routes for the therapy website
const routes = [
  { path: '/', name: 'homepage' },
  { path: '/about', name: 'about' },
  { path: '/services', name: 'services' },
  { path: '/pricing', name: 'pricing' },
  { path: '/book-consultation', name: 'book-consultation' },
  { path: '/anxiety-support', name: 'anxiety-support' },
  { path: '/depression-support', name: 'depression-support' },
  { path: '/adhd-support', name: 'adhd-support' },
  { path: '/anger-management', name: 'anger-management' },
  { path: '/relationship-counseling', name: 'relationship-counseling' },
  { path: '/toronto', name: 'toronto' },
  { path: '/ottawa', name: 'ottawa' },
  { path: '/assessment/stress', name: 'stress-assessment' },
  { path: '/assessment/depression', name: 'depression-assessment' },
  { path: '/assessment/anxiety', name: 'anxiety-assessment' },
  { path: '/assessment/adhd', name: 'adhd-assessment' },
  { path: '/assessment/habits', name: 'habits-assessment' },
  { path: '/articles', name: 'articles' },
  { path: '/article-managing-work-stress', name: 'work-stress-article' },
  { path: '/contact', name: 'contact' },
  { path: '/team', name: 'team' },
];

// Test each route on desktop viewport
test.describe('Visual Regression - Desktop (1280x800)', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  for (const route of routes) {
    test(`${route.name} - desktop screenshot`, async ({ page }) => {
      // Navigate to route
      await page.goto(route.path);

      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');

      // Wait for any images to load
      await page.waitForTimeout(2000);

      // Hide any dynamic content that might cause flaky tests
      await page.addStyleTag({
        content: `
          /* Hide elements that might cause visual inconsistencies */
          .unsplash-attribution,
          .dynamic-timestamp,
          .current-year {
            visibility: hidden !important;
          }

          /* Mask the AssessmentPrompt region to prevent visual test flakiness */
          [role="region"][aria-label*="Self-Assessment"],
          [role="region"]:has-text("Self-Assessment") {
            opacity: 0.3 !important;
            background: #f3f4f6 !important;
          }
        `
      });

      // Take full page screenshot
      await expect(page).toHaveScreenshot(`${route.name}-desktop.png`, {
        fullPage: true,
        threshold: 0.2, // Allow small differences
        maxDiffPixels: 1000 // Allow some pixel differences for dynamic content
      });
    });
  }
});

// Test each route on mobile viewport
test.describe('Visual Regression - Mobile (390x844)', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  for (const route of routes) {
    test(`${route.name} - mobile screenshot`, async ({ page }) => {
      // Navigate to route
      await page.goto(route.path);

      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');

      // Wait for any images to load
      await page.waitForTimeout(2000);

      // Hide any dynamic content that might cause flaky tests
      await page.addStyleTag({
        content: `
          /* Hide elements that might cause visual inconsistencies */
          .unsplash-attribution,
          .dynamic-timestamp,
          .current-year {
            visibility: hidden !important;
          }

          /* Mask the AssessmentPrompt region to prevent visual test flakiness */
          [role="region"][aria-label*="Self-Assessment"],
          [role="region"]:has-text("Self-Assessment") {
            opacity: 0.3 !important;
            background: #f3f4f6 !important;
          }
        `
      });

      // Take full page screenshot
      await expect(page).toHaveScreenshot(`${route.name}-mobile.png`, {
        fullPage: true,
        threshold: 0.2, // Allow small differences
        maxDiffPixels: 1000 // Allow some pixel differences for dynamic content
      });
    });
  }
});

// Test specific page sections/components
test.describe('Component Visual Tests', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('Header navigation - desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test header with menu closed
    const header = page.locator('header');
    await expect(header).toHaveScreenshot('header-closed.png');

    // Test services dropdown
    await page.hover('[aria-haspopup="menu"]:has-text("Services")');
    await page.waitForTimeout(300); // Wait for dropdown animation
    await expect(header).toHaveScreenshot('header-services-open.png');
  });

  test('Footer - desktop', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const footer = page.locator('footer');
    await expect(footer).toHaveScreenshot('footer.png');
  });

  test('Assessment form - desktop', async ({ page }) => {
    await page.goto('/assessment/stress');
    await page.waitForLoadState('networkidle');

    // Screenshot of initial form state
    const form = page.locator('[role="main"]');
    await expect(form).toHaveScreenshot('stress-assessment-form.png');

    // Fill out first question and screenshot
    await page.click('button:has-text("Sometimes")');
    await expect(form).toHaveScreenshot('stress-assessment-partial.png');
  });

  test('Hero sections - desktop', async ({ page }) => {
    const heroPages = [
      { path: '/', name: 'home-hero' },
      { path: '/about', name: 'about-hero' },
      { path: '/toronto', name: 'toronto-hero' },
      { path: '/ottawa', name: 'ottawa-hero' }
    ];

    for (const heroPage of heroPages) {
      await page.goto(heroPage.path);
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000); // Wait for images to load

      const hero = page.locator('.hero-section, .relative.h-64, .relative.h-80, .relative.h-96').first();
      if (await hero.count() > 0) {
        await expect(hero).toHaveScreenshot(`${heroPage.name}.png`);
      }
    }
  });
});

// Test responsive breakpoints
test.describe('Responsive Visual Tests', () => {
  const viewports = [
    { width: 768, height: 1024, name: 'tablet' },
    { width: 1024, height: 768, name: 'tablet-landscape' },
    { width: 1440, height: 900, name: 'large-desktop' },
    { width: 320, height: 568, name: 'small-mobile' }
  ];

  for (const viewport of viewports) {
    test(`Homepage - ${viewport.name}`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      await page.waitForTimeout(2000);

      await expect(page).toHaveScreenshot(`homepage-${viewport.name}.png`, {
        fullPage: true,
        threshold: 0.2,
        maxDiffPixels: 1000
      });
    });
  }
});

// Test error pages
test.describe('Error Page Visual Tests', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('404 Not Found page - desktop', async ({ page }) => {
    // Navigate to a non-existent page to trigger 404
    await page.goto('/this-page-does-not-exist');

    // Wait for the error page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Take screenshot of the 404 page
    await expect(page).toHaveScreenshot('404-page-desktop.png', {
      fullPage: true,
      threshold: 0.2,
      maxDiffPixels: 1000
    });
  });

  test('404 Not Found page - mobile', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    // Navigate to a non-existent page to trigger 404
    await page.goto('/this-page-does-not-exist');

    // Wait for the error page to load
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);

    // Take screenshot of the 404 page
    await expect(page).toHaveScreenshot('404-page-mobile.png', {
      fullPage: true,
      threshold: 0.2,
      maxDiffPixels: 1000
    });
  });
});
