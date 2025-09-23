const { test, expect } = require('@playwright/test');

test.describe('Therapy Website Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://therapy-website.vercel.app');
  });

  test('should have correct title and meta information', async ({ page }) => {
    await expect(page).toHaveTitle(/Premium Men's Therapy/);

    // Check for important meta tags
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute('content', /mental health/i);
  });

  test('should display hero section with call-to-action buttons', async ({ page }) => {
    // Check hero heading
    await expect(page.locator('h1')).toContainText('Men\'s Mental Health Support');

    // Check CTA buttons are visible and clickable
    await expect(page.locator('text=Book Free Consultation')).toBeVisible();
    await expect(page.locator('text=Request Information')).toBeVisible();
  });

  test('should display service badges with key benefits', async ({ page }) => {
    // Check for service badges
    await expect(page.locator('text=Services Available')).toBeVisible();
    await expect(page.locator('text=Online & In-Person')).toBeVisible();
    await expect(page.locator('text=Insurance Coverage')).toBeVisible();
    await expect(page.locator('text=Expert Team')).toBeVisible();
  });

  test('should show emotional states section', async ({ page }) => {
    await expect(page.locator('text=If you find yourself feeling')).toBeVisible();

    // Check for emotional state indicators
    await expect(page.locator('text=Anxious')).toBeVisible();
    await expect(page.locator('text=Depressed')).toBeVisible();
    await expect(page.locator('text=Lost')).toBeVisible();
  });

  test('should display therapy services', async ({ page }) => {
    await expect(page.locator('text=Therapy Services')).toBeVisible();
    await expect(page.locator('text=Individual Therapy')).toBeVisible();
    await expect(page.locator('text=Couples Therapy')).toBeVisible();
    await expect(page.locator('text=Group Therapy')).toBeVisible();
  });

  test('should show specialization areas', async ({ page }) => {
    await expect(page.locator('text=Areas of Support We Specialize In')).toBeVisible();

    // Check for key specialization areas
    await expect(page.locator('text=ADHD')).toBeVisible();
    await expect(page.locator('text=Anxiety')).toBeVisible();
    await expect(page.locator('text=Depression')).toBeVisible();
    await expect(page.locator('text=Trauma & PTSD')).toBeVisible();
  });

  test('should display team carousel', async ({ page }) => {
    await expect(page.locator('text=Find a therapist that\'s right for you')).toBeVisible();

    // Check for team members
    await expect(page.locator('text=Dr. Michael Chen')).toBeVisible();
    await expect(page.locator('text=Registered Psychotherapist')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    // Test main navigation
    const aboutLink = page.locator('text=Learn More About Our Approach');
    await expect(aboutLink).toBeVisible();

    // Test service links
    const individualTherapyLink = page.locator('a[href="/individual-therapy"]').first();
    await expect(individualTherapyLink).toBeVisible();
  });

  test('should show crisis support information', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    await expect(page.locator('text=Crisis Support Available 24/7')).toBeVisible();
    await expect(page.locator('text=Emergency:')).toBeVisible();
    await expect(page.locator('text=911')).toBeVisible();
  });

  test('should have CRPO compliance indicators', async ({ page }) => {
    // Check for CRPO registration mentions
    await expect(page.locator('text=CRPO Registered')).toBeVisible();
    await expect(page.locator('text=Registered Psychotherapist')).toBeVisible();
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
    await page.goto('https://therapy-website.vercel.app');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});