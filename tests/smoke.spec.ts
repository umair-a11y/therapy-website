import { test, expect } from '@playwright/test';

/**
 * Smoke tests to verify basic functionality
 * These tests should run quickly and catch major issues
 */

test.describe('Smoke Tests', () => {
  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Wait for page to load
    await page.waitForLoadState('networkidle');

    // Verify page title
    await expect(page).toHaveTitle(/Resolve Men's Therapy|therapy/i);

    // Verify main heading is visible
    const mainHeading = page.locator('h1').first();
    await expect(mainHeading).toBeVisible();

    // Verify navigation is present
    const nav = page.locator('nav, header');
    await expect(nav.first()).toBeVisible();
  });

  test('Services page loads successfully', async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');

    // Verify service links are present
    const serviceLinks = page.locator('a[href*="support"], a[href*="counseling"]');
    await expect(serviceLinks.first()).toBeVisible();
  });

  test('Assessment page is interactive', async ({ page }) => {
    await page.goto('/assessment/stress');
    await page.waitForLoadState('networkidle');

    // Verify form elements are present
    const buttons = page.locator('button');
    await expect(buttons.first()).toBeVisible();

    // Try clicking a response button
    const responseButton = page.locator('button:has-text("Never"), button:has-text("Sometimes")').first();
    if (await responseButton.count() > 0) {
      await responseButton.click();
      // Verify button state changed
      await expect(responseButton).toHaveClass(/bg-therapeutic-primary/);
    }
  });

  test('Contact page has form', async ({ page }) => {
    await page.goto('/contact');
    await page.waitForLoadState('networkidle');

    // Verify contact form or contact information is present
    const contactInfo = page.locator('form, [href^="mailto:"], [href^="tel:"]');
    await expect(contactInfo.first()).toBeVisible();
  });

  test('No console errors on homepage', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter out known acceptable errors (e.g., third-party script errors)
    const significantErrors = consoleErrors.filter(error =>
      !error.includes('favicon') &&
      !error.includes('Extension context invalidated') &&
      !error.toLowerCase().includes('third-party')
    );

    expect(significantErrors).toHaveLength(0);
  });

  test('Basic accessibility - no missing alt attributes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for images to load

    // Check all images have alt attributes or are decorative
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute('alt');
      const ariaHidden = await image.getAttribute('aria-hidden');
      const role = await image.getAttribute('role');

      // Image should have alt text, be hidden, or be decorative
      expect(
        alt !== null ||
        ariaHidden === 'true' ||
        role === 'presentation'
      ).toBeTruthy();
    }
  });

  test('Mobile viewport renders correctly', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Verify page doesn't have horizontal scroll
    const bodyOverflow = await page.evaluate(() => {
      const body = document.body;
      const html = document.documentElement;
      return {
        bodyScrollWidth: body.scrollWidth,
        bodyClientWidth: body.clientWidth,
        htmlScrollWidth: html.scrollWidth,
        htmlClientWidth: html.clientWidth
      };
    });

    // Allow small differences for scrollbars
    expect(bodyOverflow.bodyScrollWidth - bodyOverflow.bodyClientWidth).toBeLessThan(20);
  });

  test('All service pages are accessible', async ({ page }) => {
    const servicePages = [
      '/anxiety-support',
      '/depression-support',
      '/adhd-support',
      '/anger-management',
    ];

    for (const servicePage of servicePages) {
      await page.goto(servicePage);
      await page.waitForLoadState('networkidle');

      // Verify page loads and has content
      const main = page.locator('main, [role="main"]').first();
      await expect(main).toBeVisible();

      // Verify page has a heading
      const heading = page.locator('h1').first();
      await expect(heading).toBeVisible();
    }
  });

  test('Location pages load correctly', async ({ page }) => {
    const locationPages = ['/toronto', '/ottawa'];

    for (const locationPage of locationPages) {
      await page.goto(locationPage);
      await page.waitForLoadState('networkidle');

      // Verify location-specific content
      const main = page.locator('main, [role="main"]').first();
      await expect(main).toBeVisible();

      // Verify page mentions the city name
      const cityName = locationPage.replace('/', '');
      const cityMention = page.locator(`text=/${cityName}/i`).first();
      await expect(cityMention).toBeVisible();
    }
  });
});
