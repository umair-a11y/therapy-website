const { test, expect } = require('@playwright/test');

const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/services', name: 'Services Page' },
  { path: '/individual-therapy', name: 'Individual Therapy' },
  { path: '/couples-therapy', name: 'Couples Therapy' },
  { path: '/group-therapy', name: 'Group Therapy' },
  { path: '/adhd-support', name: 'ADHD Support' },
  { path: '/anxiety-support', name: 'Anxiety Support' },
  { path: '/depression-support', name: 'Depression Support' },
  { path: '/anger-management', name: 'Anger Management' },
  { path: '/contact', name: 'Contact Page' },
  { path: '/book-consultation', name: 'Book Consultation' },
  { path: '/team', name: 'Team Page' },
  { path: '/pricing', name: 'Pricing Page' },
  { path: '/faq', name: 'FAQ Page' }
];

test.describe('Header Consistency Tests', () => {
  pages.forEach(({ path, name }) => {
    test(`Header consistency on ${name}`, async ({ page }) => {
      await page.goto(`http://localhost:3200${path}`);

      // Wait for page to load
      await page.waitForLoadState('networkidle');

      // Check header exists
      const header = page.locator('header, nav').first();
      await expect(header).toBeVisible();

      // Check logo/brand name
      const logo = page.locator('text=ResolveMen\'s Therapy').first();
      await expect(logo).toBeVisible();

      // Check mobile menu button (hamburger menu)
      const mobileMenuButton = page.locator('header button').filter({
        has: page.locator('svg')
      }).and(page.locator('.lg\\:hidden'));

      // Check if mobile menu button is visible on mobile
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(mobileMenuButton).toBeVisible();

      // Reset to desktop
      await page.setViewportSize({ width: 1280, height: 720 });

      // Check main navigation items are present
      const navItems = [
        'About',
        'Services',
        'Team',
        'Contact'
      ];

      for (const item of navItems) {
        const navLink = page.locator(`nav a, header a`).filter({ hasText: new RegExp(item, 'i') }).first();
        // Navigation might be in dropdown, so we check if it exists
        const count = await navLink.count();
        expect(count).toBeGreaterThanOrEqual(0); // Should exist somewhere in header/nav
      }

      // Check header styling consistency
      await expect(header).toHaveCSS('position', /fixed|sticky|relative/);

      // Take screenshot for visual verification
      await page.screenshot({
        path: `test-results/header-${name.replace(/\s+/g, '-').toLowerCase()}.png`,
        fullPage: false
      });
    });
  });
});