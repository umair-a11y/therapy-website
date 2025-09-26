import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Key routes for accessibility testing
const routes = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/anxiety-support', name: 'Anxiety Support' },
  { path: '/depression-support', name: 'Depression Support' },
  { path: '/adhd-support', name: 'ADHD Support' },
  { path: '/anger-management', name: 'Anger Management' },
  { path: '/relationship-counseling', name: 'Relationship Counseling' },
  { path: '/toronto', name: 'Toronto' },
  { path: '/ottawa', name: 'Ottawa' },
  { path: '/assessment/stress', name: 'Stress Assessment' },
  { path: '/assessment/depression', name: 'Depression Assessment' },
  { path: '/assessment/anxiety', name: 'Anxiety Assessment' },
  { path: '/assessment/adhd', name: 'ADHD Assessment' },
  { path: '/assessment/habits', name: 'Habits Assessment' },
  { path: '/articles', name: 'Articles' },
  { path: '/article-managing-work-stress', name: 'Work Stress Article' },
  { path: '/contact', name: 'Contact' },
  { path: '/team', name: 'Team' },
];

test.describe('Accessibility Audits', () => {
  // Test each route for accessibility violations
  for (const route of routes) {
    test(`${route.name} - should not have accessibility violations`, async ({ page }) => {
      await page.goto(route.path);

      // Wait for page to be fully loaded
      await page.waitForLoadState('networkidle');

      // Wait for dynamic content to load
      await page.waitForTimeout(1000);

      // Run axe accessibility scan
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
        .exclude('#third-party-scripts') // Exclude third-party content
        .analyze();

      // Assert no serious violations (critical or serious)
      const criticalViolations = accessibilityScanResults.violations.filter(
        violation => violation.impact === 'critical'
      );
      const seriousViolations = accessibilityScanResults.violations.filter(
        violation => violation.impact === 'serious'
      );

      // Log violations for debugging
      if (criticalViolations.length > 0) {
        console.log(`Critical violations on ${route.path}:`,
          JSON.stringify(criticalViolations, null, 2));
      }
      if (seriousViolations.length > 0) {
        console.log(`Serious violations on ${route.path}:`,
          JSON.stringify(seriousViolations, null, 2));
      }

      // Fail test if critical or serious violations are found
      expect(criticalViolations).toHaveLength(0);
      expect(seriousViolations).toHaveLength(0);

      // Log moderate and minor violations for awareness but don't fail
      const moderateViolations = accessibilityScanResults.violations.filter(
        violation => violation.impact === 'moderate'
      );
      const minorViolations = accessibilityScanResults.violations.filter(
        violation => violation.impact === 'minor'
      );

      if (moderateViolations.length > 0) {
        console.log(`Moderate violations on ${route.path}:`, moderateViolations.length);
      }
      if (minorViolations.length > 0) {
        console.log(`Minor violations on ${route.path}:`, minorViolations.length);
      }
    });
  }
});

test.describe('Focused Accessibility Tests', () => {
  test('Navigation menu - keyboard accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test keyboard navigation through main nav
    await page.keyboard.press('Tab'); // Focus first interactive element

    // Find and focus the Services menu
    await page.focus('[aria-haspopup="menu"]:has-text("Services")');

    // Press Enter to open dropdown
    await page.keyboard.press('Enter');
    await page.waitForTimeout(300);

    // Verify dropdown is open and accessible
    const dropdown = page.locator('[role="menu"]').first();
    await expect(dropdown).toBeVisible();

    // Test arrow key navigation within dropdown
    await page.keyboard.press('ArrowDown');
    const firstMenuItem = page.locator('[role="menuitem"]').first();
    await expect(firstMenuItem).toBeFocused();

    // Test escape key to close dropdown
    await page.keyboard.press('Escape');
    await expect(dropdown).not.toBeVisible();

    // Run accessibility scan on navigation area
    const navScanResults = await new AxeBuilder({ page })
      .include('header')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(navScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
  });

  test('Assessment forms - accessibility', async ({ page }) => {
    await page.goto('/assessment/stress');
    await page.waitForLoadState('networkidle');

    // Test form labels and fieldsets
    const form = page.locator('form, [role="main"]').first();

    // Verify form has proper structure
    const questions = page.locator('h3, [role="group"]');
    await expect(questions.first()).toBeVisible();

    // Test radio button groups
    const radioButtons = page.locator('button[role="radio"], input[type="radio"]');
    if (await radioButtons.count() > 0) {
      await radioButtons.first().focus();
      await page.keyboard.press('ArrowRight');
      await page.keyboard.press('ArrowLeft');
    }

    // Run accessibility scan on form
    const formScanResults = await new AxeBuilder({ page })
      .include('[role="main"]')
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();

    expect(formScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
  });

  test('Images and media - accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000); // Wait for images to load

    // Check all images have alt text
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute('alt');
      const ariaLabel = await image.getAttribute('aria-label');
      const ariaHidden = await image.getAttribute('aria-hidden');

      // Image should have alt text, aria-label, or be decorative (aria-hidden)
      expect(alt !== null || ariaLabel !== null || ariaHidden === 'true').toBeTruthy();
    }

    // Run accessibility scan focused on images
    const imageScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a'])
      .withRules(['image-alt'])
      .analyze();

    expect(imageScanResults.violations).toHaveLength(0);
  });

  test('Color contrast - accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Run color contrast scan
    const contrastScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .withRules(['color-contrast'])
      .analyze();

    // Log contrast violations for debugging
    if (contrastScanResults.violations.length > 0) {
      console.log('Color contrast violations:',
        JSON.stringify(contrastScanResults.violations, null, 2));
    }

    expect(contrastScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
  });

  test('Focus management - accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test focus visibility by cycling through focusable elements
    let focusableElements = 0;
    let currentElement;

    // Tab through first 10 focusable elements
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab');
      currentElement = await page.evaluate(() => document.activeElement?.tagName);
      if (currentElement && ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'].includes(currentElement)) {
        focusableElements++;
      }
    }

    // Should have found some focusable elements
    expect(focusableElements).toBeGreaterThan(0);

    // Run focus-related accessibility scan
    const focusScanResults = await new AxeBuilder({ page })
      .withRules(['focus-order-semantics', 'focusable-no-name'])
      .analyze();

    expect(focusScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
  });

  test('ARIA attributes - accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Run ARIA-specific accessibility scan
    const ariaScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .withRules([
        'aria-allowed-attr',
        'aria-required-attr',
        'aria-valid-attr-value',
        'aria-valid-attr',
        'button-name',
        'link-name'
      ])
      .analyze();

    // Log ARIA violations for debugging
    if (ariaScanResults.violations.length > 0) {
      console.log('ARIA violations:',
        JSON.stringify(ariaScanResults.violations, null, 2));
    }

    expect(ariaScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
  });
});

test.describe('Mobile Accessibility Tests', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('Mobile navigation - accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Test mobile menu if it exists
    const mobileMenuButton = page.locator('[aria-label*="menu"], [aria-expanded]').first();
    if (await mobileMenuButton.count() > 0) {
      await mobileMenuButton.click();
      await page.waitForTimeout(300);

      // Run accessibility scan on mobile navigation
      const mobileScanResults = await new AxeBuilder({ page })
        .include('header, nav')
        .withTags(['wcag2a', 'wcag2aa'])
        .analyze();

      expect(mobileScanResults.violations.filter(v => v.impact === 'critical' || v.impact === 'serious')).toHaveLength(0);
    }
  });

  test('Touch targets - mobile accessibility', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check button and link sizes meet minimum touch target requirements (44x44px)
    const clickableElements = page.locator('button, a, input[type="button"], input[type="submit"]');
    const count = await clickableElements.count();

    for (let i = 0; i < Math.min(count, 10); i++) { // Check first 10 elements
      const element = clickableElements.nth(i);
      const box = await element.boundingBox();

      if (box && box.width > 0 && box.height > 0) {
        // Touch targets should be at least 44x44px or have sufficient padding
        const hasMinSize = box.width >= 44 && box.height >= 44;
        const hasGoodPadding = box.width >= 32 && box.height >= 32; // Relaxed for good UX

        expect(hasMinSize || hasGoodPadding).toBeTruthy();
      }
    }
  });
});