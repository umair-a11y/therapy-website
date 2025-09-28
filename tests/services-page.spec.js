import { test, expect } from '@playwright/test';

test.describe('Services Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/services');
    await page.waitForLoadState('networkidle');
  });

  test('should display services page hero section', async ({ page }) => {
    // Check hero heading
    await expect(page.locator('h1')).toContainText('Tools for the path forward');

    // Check hero description
    await expect(page.locator('text=We provide practical, evidence-based therapy')).toBeVisible();
  });

  test('should display main services grid with all service cards', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Services Tailored for Men')).toBeVisible();

    // Check main service cards
    const mainServices = [
      'Anger Management',
      'Anxiety & Stress',
      'Burnout & Overload',
      'ADHD & Focus',
      'Depression & Low Mood'
    ];

    for (const service of mainServices) {
      await expect(page.locator(`text=${service}`)).toBeVisible();
    }

    // Check that service cards are clickable links
    await expect(page.locator('a[href="/anger-management"]')).toBeVisible();
    await expect(page.locator('a[href="/anxiety-support"]')).toBeVisible();
    await expect(page.locator('a[href="/stress-burnout"]')).toBeVisible();
    await expect(page.locator('a[href="/adhd-support"]')).toBeVisible();
    await expect(page.locator('a[href="/depression-support"]')).toBeVisible();
  });

  test('should display specialized support tracks section', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Specialized Support Tracks')).toBeVisible();

    // Check section description
    await expect(page.locator('text=Focused programs built for specific seasons of life')).toBeVisible();

    // Check specialized track cards
    const specializedTracks = [
      'Men\'s Issues Therapy',
      'Support for Partners',
      'Performance Anxiety',
      'Work-Life Balance Reset',
      'Parenting Support for Dads',
      'Grief & Loss Support',
      'First Responder Support',
      'EMDR Therapy'
    ];

    for (const track of specializedTracks) {
      await expect(page.locator(`text=${track}`)).toBeVisible();
    }

    // Check that specialized track cards link to correct pages
    await expect(page.locator('a[href="/mens-issues"]')).toBeVisible();
    await expect(page.locator('a[href="/for-partners"]')).toBeVisible();
    await expect(page.locator('a[href="/performance-anxiety"]')).toBeVisible();
    await expect(page.locator('a[href="/work-life-balance"]')).toBeVisible();
    await expect(page.locator('a[href="/parenting-support"]')).toBeVisible();
    await expect(page.locator('a[href="/grief-support"]')).toBeVisible();
    await expect(page.locator('a[href="/first-responder-support"]')).toBeVisible();
    await expect(page.locator('a[href="/emdr-therapy"]')).toBeVisible();
  });

  test('should display care wherever you are section', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Care Wherever You Are')).toBeVisible();

    // Check location cards
    await expect(page.locator('text=Toronto (GTA)')).toBeVisible();
    await expect(page.locator('text=Ottawa + Eastern Ontario')).toBeVisible();

    // Check location links
    await expect(page.locator('a[href="/toronto"]')).toBeVisible();
    await expect(page.locator('a[href="/ottawa"]')).toBeVisible();

    // Check location descriptions
    await expect(page.locator('text=Virtual-first with limited in-person intensives')).toBeVisible();
    await expect(page.locator('text=Dedicated team for military, public service')).toBeVisible();
  });

  test('should display self-assessment section', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Find Your Starting Point')).toBeVisible();

    // Check section description
    await expect(page.locator('text=Not sure where to begin? Take a free, confidential self-assessment')).toBeVisible();

    // Check self-assessment cards
    const assessments = [
      'Mood Snapshot',
      'Anxiety Check',
      'Focus & Habits',
      'Stress Load & Recovery'
    ];

    for (const assessment of assessments) {
      await expect(page.locator(`text=${assessment}`)).toBeVisible();
    }

    // Check assessment links
    await expect(page.locator('a[href="/self-check/depression"]')).toBeVisible();
    await expect(page.locator('a[href="/self-check/anxiety"]')).toBeVisible();
    await expect(page.locator('a[href="/self-check/adhd"]')).toBeVisible();
    await expect(page.locator('a[href="/self-check/stress"]')).toBeVisible();
  });

  test('should display how it works section', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Your Path Forward in 4 Steps')).toBeVisible();

    // Check all 4 steps
    const steps = ['Book', 'Plan', 'Work', 'Review'];

    for (let i = 0; i < steps.length; i++) {
      await expect(page.locator(`text=${steps[i]}`)).toBeVisible();
      // Check step numbers
      await expect(page.locator(`text=${i + 1}`)).toBeVisible();
    }

    // Check step descriptions
    await expect(page.locator('text=Schedule a free, 30-minute consultation')).toBeVisible();
    await expect(page.locator('text=map out your goals and build a clear, practical plan')).toBeVisible();
    await expect(page.locator('text=weekly sessions focused on building skills')).toBeVisible();
    await expect(page.locator('text=review what\'s working and fine-tune our approach')).toBeVisible();
  });

  test('should display insurance and pricing section', async ({ page }) => {
    // Check section heading
    await expect(page.locator('text=Making Therapy Accessible')).toBeVisible();

    // Check insurance coverage info
    await expect(page.locator('text=Insurance Coverage')).toBeVisible();
    await expect(page.locator('text=Therapy with a Registered Psychotherapist is covered')).toBeVisible();
    await expect(page.locator('text=We provide receipts for reimbursement')).toBeVisible();

    // Check flexible options info
    await expect(page.locator('text=Flexible Options')).toBeVisible();
    await expect(page.locator('text=Sliding scale options for financial hardship')).toBeVisible();
    await expect(page.locator('text=Transparent pricing with no hidden fees')).toBeVisible();
  });

  test('should display CTA section with booking options', async ({ page }) => {
    // Check CTA heading
    await expect(page.locator('text=Ready to Get Started?')).toBeVisible();

    // Check CTA description
    await expect(page.locator('text=Take the first step toward better mental health')).toBeVisible();

    // Check CTA buttons
    await expect(page.locator('text=Book a 30-minute consult')).toBeVisible();
    await expect(page.locator('text=Take a free Self-Assessment')).toBeVisible();

    // Check button links
    await expect(page.locator('a[href="/self-check"]')).toBeVisible();
  });

  test('should have working service card navigation', async ({ page }) => {
    // Test clicking on a main service card
    const angerManagementCard = page.locator('a[href="/anger-management"]').first();
    await expect(angerManagementCard).toBeVisible();

    // Click and verify navigation
    await angerManagementCard.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/anger-management/);
  });

  test('should have working specialized track navigation', async ({ page }) => {
    // Test clicking on a specialized track card
    const performanceAnxietyCard = page.locator('a[href="/performance-anxiety"]').first();
    await expect(performanceAnxietyCard).toBeVisible();

    // Click and verify navigation
    await performanceAnxietyCard.click();
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveURL(/\/performance-anxiety/);
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Check that main elements are still visible and accessible
    await expect(page.locator('h1')).toContainText('Tools for the path forward');
    await expect(page.locator('text=Services Tailored for Men')).toBeVisible();
    await expect(page.locator('text=Specialized Support Tracks')).toBeVisible();

    // Check that cards stack properly on mobile
    const serviceCards = page.locator('[href="/anger-management"], [href="/anxiety-support"], [href="/adhd-support"]');
    const cardCount = await serviceCards.count();
    expect(cardCount).toBeGreaterThan(0);

    // Verify mobile CTA buttons are accessible
    await expect(page.locator('text=Book a 30-minute consult')).toBeVisible();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    // Check main heading
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText('Tools for the path forward');

    // Check section headings are h2
    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(4); // Should have multiple section headings

    // Check card headings are h3
    const h3Elements = page.locator('h3');
    const h3Count = await h3Elements.count();
    expect(h3Count).toBeGreaterThan(10); // Should have service and track card headings
  });
});
