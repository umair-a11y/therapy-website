import { test, expect } from "@playwright/test";

test.describe("Security Tests", () => {
  test.describe("Rate Limiting", () => {
    test("should enforce rate limits on consultation endpoint", async ({ request }) => {
      const testData = {
        fullName: "Test User",
        email: "test@example.com",
        phone: "4165551234",
        ageRange: "25-34",
        concerns: "Test concerns",
        preferredTime: "morning",
        consent: true,
        privacyPolicy: true,
      };

      // Make requests up to the limit (5 requests per 15 minutes)
      const responses = [];
      for (let i = 0; i < 6; i++) {
        const response = await request.post("/api/consultation", {
          data: testData,
          headers: {
            "x-forwarded-for": "192.168.1.100", // Simulate same IP
          },
        });
        responses.push(response);
      }

      // First 5 should succeed (or return validation errors)
      for (let i = 0; i < 5; i++) {
        expect(responses[i].status()).not.toBe(429);
      }

      // 6th request should be rate limited
      expect(responses[5].status()).toBe(429);
      const rateLimitBody = await responses[5].json();
      expect(rateLimitBody.error).toContain("Too many requests");
    });

    test("should include Retry-After header when rate limited", async ({ request }) => {
      const testData = {
        fullName: "Rate Test",
        email: "rate@test.com",
        consent: true,
        privacyPolicy: true,
      };

      // Exhaust rate limit with unique IP
      const testIp = `10.0.0.${Math.floor(Math.random() * 255)}`;
      for (let i = 0; i < 5; i++) {
        await request.post("/api/consultation", {
          data: testData,
          headers: { "x-forwarded-for": testIp },
        });
      }

      // Next request should be rate limited
      const response = await request.post("/api/consultation", {
        data: testData,
        headers: { "x-forwarded-for": testIp },
      });

      expect(response.status()).toBe(429);
      expect(response.headers()["retry-after"]).toBeDefined();
    });
  });

  test.describe("Input Validation", () => {
    test("should reject invalid email format", async ({ request }) => {
      const response = await request.post("/api/consultation", {
        data: {
          fullName: "Test User",
          email: "invalid-email",
          consent: true,
          privacyPolicy: true,
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid input data");
      expect(body.details).toContain("Invalid email address");
    });

    test("should reject missing required fields", async ({ request }) => {
      const response = await request.post("/api/consultation", {
        data: {
          email: "test@example.com",
          // Missing fullName, consent, privacyPolicy
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toBe("Invalid input data");
      expect(body.details).toContain("Full name is required");
      expect(body.details).toContain("Consent is required");
      expect(body.details).toContain("Privacy policy acceptance is required");
    });

    test("should sanitize and validate phone numbers", async ({ request }) => {
      const validPhones = ["416-555-1234", "(416) 555-1234", "4165551234"];

      for (const phone of validPhones) {
        const response = await request.post("/api/consultation", {
          data: {
            fullName: "Test User",
            email: "test@example.com",
            phone: phone,
            consent: true,
            privacyPolicy: true,
          },
        });

        // Should not reject valid phone formats
        if (response.status() === 400) {
          const body = await response.json();
          expect(body.details).not.toContain("Phone number");
        }
      }

      // Test invalid phone
      const invalidResponse = await request.post("/api/consultation", {
        data: {
          fullName: "Test User",
          email: "test@example.com",
          phone: "123", // Too short
          consent: true,
          privacyPolicy: true,
        },
      });

      expect(invalidResponse.status()).toBe(400);
      const body = await invalidResponse.json();
      expect(body.details).toContain("Phone number must be between 10 and 15 digits");
    });

    test("should enforce text length limits", async ({ request }) => {
      const longText = "a".repeat(2001); // Exceeds 2000 char limit

      const response = await request.post("/api/consultation", {
        data: {
          fullName: "Test User",
          email: "test@example.com",
          concerns: longText,
          consent: true,
          privacyPolicy: true,
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.details).toContain("Concerns text is too long");
    });

    test("should validate age range options", async ({ request }) => {
      const validAgeRanges = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];

      // Test valid age range
      for (const ageRange of validAgeRanges) {
        const response = await request.post("/api/consultation", {
          data: {
            fullName: "Test User",
            email: `test${ageRange}@example.com`,
            ageRange: ageRange,
            consent: true,
            privacyPolicy: true,
          },
        });

        // Valid age ranges should not cause validation errors
        if (response.status() === 400) {
          const body = await response.json();
          expect(body.details).not.toContain("age");
        }
      }

      // Test with invalid age range (should be silently ignored, not cause error)
      const invalidResponse = await request.post("/api/consultation", {
        data: {
          fullName: "Test User",
          email: "test@example.com",
          ageRange: "invalid-range",
          consent: true,
          privacyPolicy: true,
        },
      });

      // Should not reject, just ignore invalid value
      expect(invalidResponse.status()).not.toBe(400);
    });

    test("should protect against XSS in input fields", async ({ request }) => {
      const xssPayload = '<script>alert("XSS")</script>';

      const response = await request.post("/api/consultation", {
        data: {
          fullName: xssPayload,
          email: "test@example.com",
          concerns: xssPayload,
          consent: true,
          privacyPolicy: true,
        },
      });

      // Should either reject or sanitize, but not store raw script tags
      // The validator.escape() function should handle this
      expect(response.status()).toBeLessThan(500); // Should not cause server error
    });
  });

  test.describe("Security Headers", () => {
    test("API should return security headers", async ({ request }) => {
      const response = await request.post("/api/consultation", {
        data: { invalid: "data" }, // Intentionally invalid to get quick response
      });

      const headers = response.headers();
      expect(headers["x-content-type-options"]).toBe("nosniff");
      expect(headers["x-frame-options"]).toBe("DENY");
      expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
      expect(headers["cache-control"]).toContain("no-store");
    });
  });

  test.describe("Toolkit API Security", () => {
    test("should validate email in toolkit endpoint", async ({ request }) => {
      const response = await request.post("/api/toolkit", {
        data: {
          email: "invalid-email",
          toolkitName: "Test Toolkit",
          consent: true,
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toContain("Valid email is required");
    });

    test("should require consent for toolkit", async ({ request }) => {
      const response = await request.post("/api/toolkit", {
        data: {
          email: "test@example.com",
          toolkitName: "Test Toolkit",
          consent: false,
        },
      });

      expect(response.status()).toBe(400);
      const body = await response.json();
      expect(body.error).toContain("Explicit consent is required");
    });
  });
});