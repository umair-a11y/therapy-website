import { test, expect } from '@playwright/test';

test.describe('Therapy Website Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have correct title and meta information', async ({ page }) => {
    await expect(page).toHaveTitle(/Premium Men's Therapy/);

    // Check for important meta tags
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /mental health/i);
  });

  test('should display hero section with call-to-action buttons', async ({ page }) => {
    // Check hero heading
    await expect(page.locator('h1')).toContainText('Support for Men\'s Mental Health');

    // Check CTA buttons are visible and clickable
    await expect(page.locator('text=Book Free Consultation')).toBeVisible();
    await expect(page.locator('text=Learn Our Approach')).toBeVisible();
  });

  test('should display trust indicators with key benefits', async ({ page }) => {
    // Check for trust indicators
    await expect(page.locator('text=Safe Space')).toBeVisible();
    await expect(page.locator('text=Qualified Therapists')).toBeVisible();
    await expect(page.locator('text=Evidence-Based')).toBeVisible();
    await expect(page.locator('text=Insurance')).toBeVisible();
  });

  test('should show emotional states section', async ({ page }) => {
    await expect(page.locator('text=If you find yourself feeling')).toBeVisible();

    // Check for emotional state indicators
    await expect(page.locator('text=Anxious')).toBeVisible();
    await expect(page.locator('text=Depressed')).toBeVisible();
    await expect(page.locator('text=Lost')).toBeVisible();
    await expect(page.locator('text=Overwhelmed')).toBeVisible();
  });

  test('should display who we help section', async ({ page }) => {
    await expect(page.locator('text=Who We Help')).toBeVisible();
    await expect(page.locator('text=Working Professionals')).toBeVisible();
    await expect(page.locator('text=Relationship Issues')).toBeVisible();
    await expect(page.locator('text=Mental Health')).toBeVisible();
  });

  test('should show approach section', async ({ page }) => {
    await expect(page.locator('text=Our Approach')).toBeVisible();

    // Check for approach elements
    await expect(page.locator('text=Understanding Approach')).toBeVisible();
    await expect(page.locator('text=Evidence-Based Methods')).toBeVisible();
    await expect(page.locator('text=Practical Strategies')).toBeVisible();
    await expect(page.locator('text=Flexible Options')).toBeVisible();
  });

  test('should display contact section', async ({ page }) => {
    await expect(page.locator('text=Get Started Today')).toBeVisible();

    // Check for contact options
    await expect(page.locator('text=Call Us')).toBeVisible();
    await expect(page.locator('text=Email Us')).toBeVisible();
    await expect(page.locator('text=Visit Us')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Test CTA section links
    const ctaText = page.locator('text=Welcome — taking the first step requires courage');
    await expect(ctaText).toBeVisible();

    // Test footer service links
    const individualTherapyLink = page.locator('a[href="/individual-therapy"]').first();
    await expect(individualTherapyLink).toBeVisible();
  });

  test('should show contact information in footer', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    await expect(page.locator('text=(647) 370-7622')).toBeVisible();
    await expect(page.locator('text=info@resolvemenstherapy.ca')).toBeVisible();
    await expect(page.locator('text=Toronto, Ontario')).toBeVisible();
  });

  test('should have CRPO compliance indicators', async ({ page }) => {
    // Check for CRPO registration mentions in trust indicators
    await expect(page.locator('text=CRPO registered professionals')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Check that main elements are still visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Book Free Consultation')).toBeVisible();
  });

  test('should have good accessibility', async ({ page }) => {
    // Check for alt text on images
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < Math.min(imageCount, 5); i++) {
      const img = images.nth(i);
      const alt = await img.getAttribute('alt');
      if (alt !== null) {
        expect(alt.length).toBeGreaterThan(0);
      }
    }
  });

  test('should load quickly', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});