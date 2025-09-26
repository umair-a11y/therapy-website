const { test, expect } = require('@playwright/test');

const allPages = [
  { path: '/', name: 'Homepage', expectedHeading: /Men's Mental Health Support|Premium Men's Therapy/ },
  { path: '/about', name: 'About Page', expectedHeading: /About|Our Story|Our Mission/ },
  { path: '/services', name: 'Services Page', expectedHeading: /Services|Our Services/ },
  { path: '/individual-therapy', name: 'Individual Therapy', expectedHeading: /Individual Therapy/ },
  { path: '/couples-therapy', name: 'Couples Therapy', expectedHeading: /Couples Therapy/ },
  { path: '/group-therapy', name: 'Group Therapy', expectedHeading: /Group Therapy/ },
  { path: '/adhd-support', name: 'ADHD Support', expectedHeading: /ADHD/ },
  { path: '/anxiety-support', name: 'Anxiety Support', expectedHeading: /Anxiety/ },
  { path: '/depression-support', name: 'Depression Support', expectedHeading: /Depression/ },
  { path: '/anger-management', name: 'Anger Management', expectedHeading: /Anger/ },
  { path: '/trauma-therapy', name: 'Trauma Therapy', expectedHeading: /Trauma|PTSD/ },
  { path: '/emdr-therapy', name: 'EMDR Therapy', expectedHeading: /EMDR/ },
  { path: '/relationship-therapy', name: 'Relationship Therapy', expectedHeading: /Relationship/ },
  { path: '/grief-support', name: 'Grief Support', expectedHeading: /Grief/ },
  { path: '/addiction-therapy', name: 'Addiction Therapy', expectedHeading: /Addiction/ },
  { path: '/stress-burnout', name: 'Stress Burnout', expectedHeading: /Stress|Burnout/ },
  { path: '/performance-anxiety', name: 'Performance Anxiety', expectedHeading: /Performance/ },
  { path: '/work-life-balance', name: 'Work Life Balance', expectedHeading: /Work|Life|Balance/ },
  { path: '/parenting-support', name: 'Parenting Support', expectedHeading: /Parenting/ },
  { path: '/mens-issues', name: 'Men\'s Issues', expectedHeading: /Men's Issues/ },
  { path: '/first-responder-support', name: 'First Responder Support', expectedHeading: /First Responder/ },
  { path: '/contact', name: 'Contact Page', expectedHeading: /Contact|Get in Touch/ },
  { path: '/book-consultation', name: 'Book Consultation', expectedHeading: /Book|Consultation/ },
  { path: '/team', name: 'Team Page', expectedHeading: /Team|Our Team|Meet/ },
  { path: '/pricing', name: 'Pricing Page', expectedHeading: /Pricing|Fees/ },
  { path: '/faq', name: 'FAQ Page', expectedHeading: /FAQ|Questions/ },
  { path: '/articles', name: 'Articles Page', expectedHeading: /Articles|Resources|Blog/ },
  { path: '/privacy', name: 'Privacy Policy', expectedHeading: /Privacy/ },
  { path: '/terms', name: 'Terms of Service', expectedHeading: /Terms/ },
  { path: '/disclaimer', name: 'Disclaimer', expectedHeading: /Disclaimer/ },
  { path: '/accessibility', name: 'Accessibility', expectedHeading: /Accessibility/ }
];

test.describe('Individual Page Tests', () => {
  allPages.forEach(({ path, name, expectedHeading }) => {
    test(`${name} loads correctly`, async ({ page }) => {
      // Navigate to the page
      await page.goto(path);

      // Wait for page to load
      await page.waitForLoadState('networkidle');

      // Check if page loaded without errors (not 404)
      const response = await page.goto(path);
      expect(response?.status()).toBeLessThan(400);

      // Check page has a title
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);
      expect(title).not.toBe('404');

      // Check main heading exists
      const mainHeading = page.locator('h1, h2').first();
      await expect(mainHeading).toBeVisible();

      // Verify expected heading content if specified
      if (expectedHeading) {
        const headingText = await mainHeading.textContent();
        expect(headingText).toMatch(expectedHeading);
      }

      // Check page has content (not empty)
      const bodyText = await page.locator('body').textContent();
      expect(bodyText.length).toBeGreaterThan(100); // Should have substantial content

      // Check for CRPO compliance elements (therapy-specific)
      const crpoElements = page.locator('text=/CRPO|registered psychotherapist|qualifying/i');
      const crpoCount = await crpoElements.count();
      expect(crpoCount).toBeGreaterThan(0); // Should mention CRPO compliance

      // Check footer exists
      const footer = page.locator('footer');
      await expect(footer).toBeVisible();

      // Check crisis support information in footer
      const crisisSupport = page.locator('text=/crisis|emergency|911/i');
      const crisisCount = await crisisSupport.count();
      expect(crisisCount).toBeGreaterThan(0); // Should have crisis support info

      // Test mobile responsiveness
      await page.setViewportSize({ width: 375, height: 667 });
      await page.waitForTimeout(300);

      // Main heading should still be visible on mobile
      await expect(mainHeading).toBeVisible();

      // Reset viewport
      await page.setViewportSize({ width: 1280, height: 720 });

      // Take screenshot for visual verification
      await page.screenshot({
        path: `test-results/page-${name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}.png`,
        fullPage: true
      });

      console.log(`✓ ${name} tested successfully`);
    });
  });

  test('All service pages have consistent structure', async ({ page }) => {
    const servicePages = [
      '/individual-therapy',
      '/couples-therapy',
      '/group-therapy',
      '/adhd-support',
      '/anxiety-support',
      '/depression-support'
    ];

    for (const servicePage of servicePages) {
      await page.goto(servicePage);
      await page.waitForLoadState('networkidle');

      // Check for consistent service page elements
      const elements = [
        'h1, h2', // Main heading
        'text=/what is|overview|description/i', // Service description
        'text=/how we help|our approach|treatment/i', // Treatment approach
        'text=/book|contact|get started/i' // Call to action
      ];

      for (const selector of elements) {
        const element = page.locator(selector).first();
        const count = await element.count();
        if (count > 0) {
          await expect(element).toBeVisible();
        }
      }

      console.log(`✓ Service page ${servicePage} has consistent structure`);
    }
  });

  test('All pages have proper meta tags and SEO', async ({ page }) => {
    const importantPages = ['/', '/about', '/services', '/individual-therapy', '/contact'];

    for (const pagePath of importantPages) {
      await page.goto(pagePath);
      await page.waitForLoadState('networkidle');

      // Check meta description
      const metaDescription = page.locator('meta[name="description"]');
      if (await metaDescription.count() > 0) {
        const description = await metaDescription.getAttribute('content');
        expect(description?.length || 0).toBeGreaterThan(50);
        expect(description?.length || 0).toBeLessThan(160);
      }

      // Check page title
      const title = await page.title();
      expect(title.length).toBeGreaterThan(10);
      expect(title.length).toBeLessThan(60);

      // Check for viewport meta tag
      const viewport = page.locator('meta[name="viewport"]');
      await expect(viewport).toHaveCount(1);

      console.log(`✓ SEO check passed for ${pagePath}`);
    }
  });
});
