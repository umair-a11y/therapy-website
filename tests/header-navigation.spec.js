import { test, expect } from '@playwright/test';

test.describe('Header Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
  });

  test('should display desktop navigation with all menu items', async ({ page }) => {
    // Test main navigation links
    await expect(page.locator('nav a[href="/"]')).toContainText('Home');
    await expect(page.locator('nav a[href="/about"]')).toContainText('About');
    await expect(page.locator('nav a[href="/services"]')).toContainText('Services');
    await expect(page.locator('nav a[href="/pricing"]')).toContainText('Pricing');
    await expect(page.locator('nav a[href="/articles"]')).toContainText('Resources');
    await expect(page.locator('nav a[href="/faq"]')).toContainText('FAQ');
    await expect(page.locator('nav a[href="/contact"]')).toContainText('Contact');

    // Test Book Consultation button
    await expect(page.locator('a[href="/book-consultation"]')).toBeVisible();
  });

  test('should show Services mega-menu on hover with all service links', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    // Hover over Services to reveal dropdown
    const servicesLink = page.locator('nav a[href="/services"]');
    await servicesLink.hover();

    // Wait for dropdown to appear
    await page.waitForTimeout(300);

    // Check for key service links in dropdown
    const serviceLinks = [
      '/individual-therapy',
      '/adhd-support',
      '/anxiety-support',
      '/depression-support',
      '/anger-management',
      '/stress-burnout',
      '/trauma-therapy',
      '/addiction-therapy',
      '/performance-anxiety',
      '/work-life-balance',
      '/mens-issues',
      '/for-partners',
      '/parenting-support',
      '/grief-support',
      '/first-responder-support',
      '/emdr-therapy'
    ];

    for (const href of serviceLinks) {
      await expect(page.locator(`a[href="${href}"]`)).toBeVisible();
    }
  });

  test('should show Self-Checks dropdown with assessment links', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    // Hover over Self-Checks to reveal dropdown
    const selfChecksButton = page.locator('button').filter({ hasText: 'Self-Checks' });
    await selfChecksButton.hover();

    // Wait for dropdown to appear
    await page.waitForTimeout(300);

    // Check for self-check links
    const selfCheckLinks = [
      '/self-check/depression',
      '/self-check/anxiety',
      '/self-check/adhd',
      '/self-check/stress',
      '/self-check/habits'
    ];

    for (const href of selfCheckLinks) {
      await expect(page.locator(`a[href="${href}"]`)).toBeVisible();
    }

    // Check for proper text labels
    await expect(page.locator('text=Depression Self-Check (PHQ-9)')).toBeVisible();
    await expect(page.locator('text=Anxiety Self-Check (GAD-7)')).toBeVisible();
    await expect(page.locator('text=ADHD Self-Check (ASRS)')).toBeVisible();
  });

  test('should show Locations dropdown with city links', async ({ page }) => {
    // Set desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });

    // Hover over Locations to reveal dropdown
    const locationsButton = page.locator('button').filter({ hasText: 'Locations' });
    await locationsButton.hover();

    // Wait for dropdown to appear
    await page.waitForTimeout(300);

    // Check for location links
    await expect(page.locator('a[href="/toronto"]')).toContainText('Toronto');
    await expect(page.locator('a[href="/ottawa"]')).toContainText('Ottawa');
  });

  test('should display mobile navigation menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Find and click mobile menu button
    const mobileMenuButton = page.locator('button').filter({
      has: page.locator('svg')
    }).first();

    await expect(mobileMenuButton).toBeVisible();
    await mobileMenuButton.click();

    // Wait for mobile menu to open
    await page.waitForTimeout(300);

    // Check main navigation links in mobile menu
    await expect(page.locator('text=Home')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Services')).toBeVisible();
    await expect(page.locator('text=Pricing')).toBeVisible();
    await expect(page.locator('text=Resources')).toBeVisible();
    await expect(page.locator('text=FAQ')).toBeVisible();
    await expect(page.locator('text=Contact')).toBeVisible();

    // Check subset of service links in mobile menu
    await expect(page.locator('a[href="/performance-anxiety"]')).toContainText('Performance Anxiety');
    await expect(page.locator('a[href="/work-life-balance"]')).toContainText('Work-Life Balance');
    await expect(page.locator('a[href="/mens-issues"]')).toContainText('Men\'s Issues');

    // Check locations section
    await expect(page.locator('text=Locations')).toBeVisible();
    await expect(page.locator('a[href="/toronto"]')).toContainText('Toronto');
    await expect(page.locator('a[href="/ottawa"]')).toContainText('Ottawa');

    // Check mobile Book Consultation button
    await expect(page.locator('a[href="/book-consultation"]')).toContainText('Book Consultation');
  });

  test('should close mobile menu when X button is clicked', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });

    // Open mobile menu
    const mobileMenuButton = page.locator('button').filter({
      has: page.locator('svg')
    }).first();
    await mobileMenuButton.click();
    await page.waitForTimeout(300);

    // Verify menu is open
    await expect(page.locator('text=About')).toBeVisible();

    // Click close button (X icon)
    await mobileMenuButton.click();
    await page.waitForTimeout(300);

    // Verify menu is closed (navigation items not visible in mobile)
    await expect(page.locator('nav').filter({ hasText: 'About' })).not.toBeVisible();
  });

  test('should have logo link that returns to homepage', async ({ page }) => {
    // Click on logo
    const logoLink = page.locator('a[href="/"]').filter({
      has: page.locator('text=Resolve Men\'s Therapy')
    }).first();

    await expect(logoLink).toBeVisible();

    // Navigate to another page first
    await page.goto('/about');
    await expect(page).toHaveURL(/\/about/);

    // Click logo to return home
    await logoLink.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/$/);
  });

  test('should have accessible navigation structure', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab'); // Should focus on first navigation element

    // Check that navigation has proper ARIA attributes
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Check that dropdown buttons have proper attributes
    const selfChecksButton = page.locator('button').filter({ hasText: 'Self-Checks' });
    const locationsButton = page.locator('button').filter({ hasText: 'Locations' });

    await expect(selfChecksButton).toBeVisible();
    await expect(locationsButton).toBeVisible();
  });

  test('should maintain navigation consistency across viewport sizes', async ({ page }) => {
    // Test desktop navigation
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('nav a[href="/services"]')).toBeVisible();

    // Test tablet navigation
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('nav a[href="/services"]')).toBeVisible();

    // Test mobile navigation (should show mobile menu button)
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileMenuButton = page.locator('button').filter({
      has: page.locator('svg')
    }).first();
    await expect(mobileMenuButton).toBeVisible();
  });
});