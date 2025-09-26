import { test, expect } from '@playwright/test';

/**
 * Security Headers Test Suite
 *
 * Tests for critical security headers on key routes to ensure they are present and properly configured.
 * These tests help prevent security regressions and ensure compliance with security best practices.
 */

// Critical routes to test for security headers
const criticalRoutes = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/services', name: 'Services' },
  { path: '/contact', name: 'Contact' },
  { path: '/book-consultation', name: 'Book Consultation' },
  { path: '/anxiety-support', name: 'Anxiety Support (Service)' },
  { path: '/article-managing-work-stress', name: 'Work Stress (Article)' }
];

test.describe('Security Headers Tests', () => {
  // Run tests for each critical route
  criticalRoutes.forEach(({ path, name }) => {
    test.describe(`${name} Page Security Headers`, () => {
      let response: any;

      test.beforeEach(async ({ page }) => {
        // Navigate to the route and capture the response
        response = await page.goto(path, { waitUntil: 'domcontentloaded' });
      });

      test('Content-Security-Policy header is present', async () => {
        const cspHeader = response?.headers()['content-security-policy'];
        const cspReportOnly = response?.headers()['content-security-policy-report-only'];

        // Check if either CSP or CSP-Report-Only is present
        const csp = cspHeader || cspReportOnly;

        // Assert presence and non-empty
        expect(csp, `${name} page should have Content-Security-Policy or Content-Security-Policy-Report-Only header`).toBeTruthy();
        expect(csp?.length).toBeGreaterThan(0);

        // Log for visibility
        if (csp) {
          console.log(`[${name}] CSP: ${csp.substring(0, 100)}...`);
        }
      });

      test('Strict-Transport-Security header is properly configured', async () => {
        const hstsHeader = response?.headers()['strict-transport-security'];

        // Assert presence
        expect(hstsHeader, `${name} page should have Strict-Transport-Security header`).toBeDefined();

        // Assert contains required directives
        expect(hstsHeader?.toLowerCase()).toContain('max-age');
        expect(hstsHeader?.toLowerCase()).toContain('includesubdomains');
      });

      test('Referrer-Policy header equals strict-origin-when-cross-origin', async () => {
        const referrerPolicy = response?.headers()['referrer-policy'];

        // Assert presence and exact value
        expect(referrerPolicy).toBe('strict-origin-when-cross-origin');
      });

      test('X-Content-Type-Options header equals nosniff', async () => {
        const xContentTypeOptions = response?.headers()['x-content-type-options'];

        // Assert presence and exact value
        expect(xContentTypeOptions).toBe('nosniff');
      });

      test('Permissions-Policy header contains required restrictions', async () => {
        const permissionsPolicy = response?.headers()['permissions-policy'];

        // Assert presence
        expect(permissionsPolicy, `${name} page should have Permissions-Policy header`).toBeDefined();

        // Assert contains required restrictions
        expect(permissionsPolicy).toContain('camera=()');
        expect(permissionsPolicy).toContain('microphone=()');
        expect(permissionsPolicy).toContain('geolocation=()');
      });

    });
  });

});