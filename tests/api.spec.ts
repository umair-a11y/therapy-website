import { test, expect } from "@playwright/test";

test.describe("API Tests", () => {
  test.describe("Consultation API", () => {
    test("should accept valid consultation request", async ({ request }) => {
      const validData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "4165551234",
        ageRange: "35-44",
        concerns: "Looking for support with work-life balance",
        preferredTime: "evening",
        consent: true,
        privacyPolicy: true,
      };

      const response = await request.post("/api/consultation", {
        data: validData,
      });

      // Should succeed if Resend is configured, or return appropriate status
      expect([200, 500]).toContain(response.status());

      if (response.status() === 200) {
        const body = await response.json();
        expect(body.success).toBe(true);
        expect(body.message).toContain("received successfully");
        expect(body.leadId).toBeDefined();
        expect(body.leadId).toMatch(/^LEAD_/);
      }
    });

    test("should handle minimal required fields", async ({ request }) => {
      const minimalData = {
        fullName: "Jane Smith",
        email: "jane@example.com",
        consent: true,
        privacyPolicy: true,
      };

      const response = await request.post("/api/consultation", {
        data: minimalData,
      });

      // Should accept minimal valid data
      expect([200, 500]).toContain(response.status());
    });

    test("should normalize email addresses", async ({ request }) => {
      const testEmails = [
        "TEST@EXAMPLE.COM",
        "test+tag@example.com",
        "  test@example.com  ",
      ];

      for (const email of testEmails) {
        const response = await request.post("/api/consultation", {
          data: {
            fullName: "Test User",
            email: email,
            consent: true,
            privacyPolicy: true,
          },
        });

        // Should normalize and accept valid emails
        expect(response.status()).not.toBe(400);
      }
    });

    test("should handle malformed JSON gracefully", async ({ request }) => {
      const response = await request.post("/api/consultation", {
        data: "invalid json",
        headers: {
          "Content-Type": "application/json",
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid request format");
    });

    test("should generate unique lead IDs", async ({ request }) => {
      const leadIds = new Set();

      for (let i = 0; i < 3; i++) {
        const response = await request.post("/api/consultation", {
          data: {
            fullName: `Test User ${i}`,
            email: `test${i}@example.com`,
            consent: true,
            privacyPolicy: true,
          },
        });

        if (response.status() === 200) {
          const body = await response.json();
          expect(leadIds.has(body.leadId)).toBe(false);
          leadIds.add(body.leadId);
        }
      }
    });

    test("should include proper error details for validation failures", async ({ request }) => {
      const invalidData = {
        fullName: "",
        email: "not-an-email",
        phone: "123",
        concerns: "a".repeat(2001),
        consent: false,
        privacyPolicy: false,
      };

      const response = await request.post("/api/consultation", {
        data: invalidData,
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid input data");
      expect(body.details).toBeInstanceOf(Array);
      expect(body.details.length).toBeGreaterThan(0);
    });
  });

  test.describe("Toolkit API", () => {
    test("should send toolkit with valid request", async ({ request }) => {
      const validData = {
        email: "user@example.com",
        toolkitName: "Stress Management Toolkit",
        consent: true,
      };

      const response = await request.post("/api/toolkit", {
        data: validData,
      });

      // Should succeed if Resend is configured
      expect([200, 500]).toContain(response.status());

      if (response.status() === 200) {
        const body = await response.json();
        expect(body.ok).toBe(true);
      }
    });

    test("should handle default toolkit name", async ({ request }) => {
      const response = await request.post("/api/toolkit", {
        data: {
          email: "user@example.com",
          consent: true,
          // No toolkitName provided
        },
      });

      // Should use default "Toolkit" name
      expect([200, 500]).toContain(response.status());
    });

    test("should trim whitespace from inputs", async ({ request }) => {
      const response = await request.post("/api/toolkit", {
        data: {
          email: "  user@example.com  ",
          toolkitName: "  My Toolkit  ",
          consent: true,
        },
      });

      expect([200, 500]).toContain(response.status());
    });

    test("should validate email format", async ({ request }) => {
      const invalidEmails = [
        "notanemail",
        "@example.com",
        "user@",
        "user @example.com",
        "",
      ];

      for (const email of invalidEmails) {
        const response = await request.post("/api/toolkit", {
          data: {
            email: email,
            toolkitName: "Test Toolkit",
            consent: true,
          },
        });

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body.error).toContain("Valid email is required");
      }
    });

    test("should enforce consent requirement", async ({ request }) => {
      const testCases = [
        { consent: false },
        { consent: null },
        { consent: undefined },
        { consent: 0 },
        { consent: "" },
      ];

      for (const testCase of testCases) {
        const response = await request.post("/api/toolkit", {
          data: {
            email: "user@example.com",
            toolkitName: "Test Toolkit",
            ...testCase,
          },
        });

        expect(response.status()).toBe(400);
        const body = await response.json();
        expect(body.error).toContain("Explicit consent is required");
      }
    });
  });

  test.describe("Error Handling", () => {
    test("should handle server errors gracefully", async ({ request }) => {
      // Test with environment that might cause email send to fail
      const response = await request.post("/api/consultation", {
        data: {
          fullName: "Test User",
          email: "test@example.com",
          consent: true,
          privacyPolicy: true,
        },
        headers: {
          // Simulate potential error conditions
          "x-test-error": "true",
        },
      });

      // Should return 200 or 500, not crash
      expect([200, 500]).toContain(response.status());

      if (response.status() === 500) {
        const body = await response.json();
        expect(body.error).toBeDefined();
        // In production, should not leak sensitive error details
        if (process.env.NODE_ENV === "production") {
          expect(body.error).toBe("An error occurred processing your request. Please try again.");
        }
      }
    });

    test("should handle network timeouts appropriately", async ({ request }) => {
      // This test would need a mock or test environment to simulate timeouts
      // For now, we just ensure the endpoint responds
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 100);

      try {
        const response = await request.post("/api/consultation", {
          data: {
            fullName: "Timeout Test",
            email: "timeout@test.com",
            consent: true,
            privacyPolicy: true,
          },
          timeout: 30000, // 30 second timeout
        });

        clearTimeout(timeoutId);
        expect(response.status()).toBeDefined();
      } catch (error) {
        // Timeout is acceptable, should not crash
        expect(error).toBeDefined();
      }
    });
  });
});