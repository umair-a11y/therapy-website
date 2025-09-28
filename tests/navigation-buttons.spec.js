import { test, expect } from '@playwright/test';

const mainPages = [
  { path: '/', name: 'Homepage', hasBookButton: true, hasCTA: true },
  { path: '/about', name: 'About Page', hasBookButton: true, hasCTA: false },
  { path: '/services', name: 'Services Page', hasBookButton: true, hasCTA: true },
  { path: '/anxiety-support', name: 'Anxiety Support', hasBookButton: true, hasCTA: true },
  { path: '/depression-support', name: 'Depression Support', hasBookButton: true, hasCTA: true },
  { path: '/adhd-support', name: 'ADHD Support', hasBookButton: true, hasCTA: true },
  { path: '/contact', name: 'Contact Page', hasBookButton: false, hasCTA: false },
  { path: '/pricing', name: 'Pricing Page', hasBookButton: true, hasCTA: false }
];

test.describe('Navigation and Button Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Set consistent viewport
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  mainPages.forEach(({ path, name, hasBookButton, hasCTA }) => {
    test(`Navigation and buttons on ${name}`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');

      // Test main navigation links
      const navigationLinks = [
        { text: 'About', href: '/about' },
        { text: 'Services', href: '/services' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'Resources', href: '/articles' },
        { text: 'FAQ', href: '/faq' },
        { text: 'Contact', href: '/contact' }
      ];

      for (const { text, href } of navigationLinks) {
        // Check if navigation link exists and is clickable
        const navLink = page.locator(`a[href="${href}"]`).first();
        if (await navLink.count() > 0) {
          await expect(navLink).toBeVisible();

          // Check button spacing by verifying CSS margin/padding
          const styles = await navLink.evaluate(el => ({
            margin: getComputedStyle(el).margin,
            padding: getComputedStyle(el).padding,
            display: getComputedStyle(el).display
          }));

          // Ensure buttons have proper spacing
          expect(styles.padding).not.toBe('0px');
        }
      }

      // Test "Book Consultation" button if it should exist
      if (hasBookButton) {
        const bookButton = page.locator('a[href="/book-consultation"], button').filter({
          hasText: /book.*consultation/i
        }).first();

        if (await bookButton.count() > 0) {
          await expect(bookButton).toBeVisible();

          // Check button styling and spacing
          const buttonStyles = await bookButton.evaluate(el => ({
            margin: getComputedStyle(el).margin,
            padding: getComputedStyle(el).padding,
            borderRadius: getComputedStyle(el).borderRadius,
            backgroundColor: getComputedStyle(el).backgroundColor
          }));

          // Verify proper button styling
          expect(buttonStyles.padding).not.toBe('0px');
          expect(buttonStyles.borderRadius).not.toBe('0px');
        }
      }

      // Test primary CTA buttons if they should exist
      if (hasCTA) {
        const ctaButtons = page.locator('button, a[class*="btn"], a[class*="button"]').filter({
          hasText: /get started|learn more|contact|book/i
        });

        const buttonCount = await ctaButtons.count();

        if (buttonCount > 0) {
          for (let i = 0; i < Math.min(buttonCount, 3); i++) {
            const button = ctaButtons.nth(i);
            await expect(button).toBeVisible();

            // Check proper spacing between buttons
            if (i > 0) {
              const previousButton = ctaButtons.nth(i - 1);
              const currentButtonBox = await button.boundingBox();
              const previousButtonBox = await previousButton.boundingBox();

              if (currentButtonBox && previousButtonBox) {
                // Ensure buttons don't overlap
                const gap = currentButtonBox.x - (previousButtonBox.x + previousButtonBox.width);
                expect(Math.abs(gap)).toBeGreaterThan(5); // At least 5px gap
              }
            }
          }
        }
      }

      // Test footer links
      const footerLinks = page.locator('footer a');
      const footerLinkCount = await footerLinks.count();

      if (footerLinkCount > 0) {
        for (let i = 0; i < Math.min(footerLinkCount, 5); i++) {
          const link = footerLinks.nth(i);
          await expect(link).toBeVisible();
        }
      }

      // Test responsive behavior
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(500); // Allow responsive adjustments

      // Check mobile navigation
      const mobileMenuButton = page.locator('button').filter({
        has: page.locator('svg')
      }).first();

      if (await mobileMenuButton.count() > 0) {
        await expect(mobileMenuButton).toBeVisible();

        // Test mobile menu functionality
        await mobileMenuButton.click();
        await page.waitForTimeout(300);

        // Check if mobile menu opened
        const mobileMenu = page.locator('nav, [role="menu"], .mobile-menu').filter({
          hasText: /about|services|contact/i
        });

        if (await mobileMenu.count() > 0) {
          await expect(mobileMenu.first()).toBeVisible();
        }
      }

      // Reset viewport
      await page.setViewportSize({ width: 1280, height: 720 });

      // Take screenshot for visual verification
      await page.screenshot({
        path: `test-results/navigation-${name.replace(/\s+/g, '-').toLowerCase()}.png`,
        fullPage: false
      });
    });
  });

  test('Cross-page navigation flow', async ({ page }) => {
    // Test navigation flow between pages
    await page.goto('/');

    // Homepage -> About
    const aboutLink = page.locator('a[href="/about"]').first();
    if (await aboutLink.count() > 0) {
      await aboutLink.click();
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(/\/about/);
      await expect(page.locator('h1, h2').first()).toBeVisible();
    }

    // About -> Services
    const servicesLink = page.locator('a[href="/services"]').first();
    if (await servicesLink.count() > 0) {
      await servicesLink.click();
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(/\/services/);
      await expect(page.locator('h1, h2').first()).toBeVisible();
    }

    // Services -> Anxiety Support
    const anxietySupportLink = page.locator('a[href="/anxiety-support"]').first();
    if (await anxietySupportLink.count() > 0) {
      await anxietySupportLink.click();
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(/\/anxiety-support/);
      await expect(page.locator('h1, h2').first()).toBeVisible();
    }

    // Back to homepage via logo
    const logoLink = page.locator('a[href="/"]').filter({ hasText: /resolve/i }).first();
    if (await logoLink.count() > 0) {
      await logoLink.click();
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(/\/$/); // Root URL
    }
  });
});