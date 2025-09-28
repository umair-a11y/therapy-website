import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(_config: FullConfig) {
  console.log('Setting up global test environment...');

  // Launch browser for setup
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Mock Unsplash responses to ensure consistent visual tests
    await page.route('**/api.unsplash.com/**', async (route) => {
      // Return a consistent placeholder image for all Unsplash requests
      const mockResponse = {
        id: 'mock-image-id',
        urls: {
          small: 'https://picsum.photos/400/300?seed=consistent',
          regular: 'https://picsum.photos/800/600?seed=consistent',
          full: 'https://picsum.photos/1200/800?seed=consistent',
        },
        alt_description: 'Mock therapy related image',
        user: {
          name: 'Test User',
          username: 'testuser'
        },
        links: {
          html: 'https://unsplash.com/@testuser'
        }
      };

      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockResponse)
      });
    });

    // Mock any external image requests to use consistent placeholders
    await page.route('**/images.unsplash.com/**', async (route) => {
      const url = new URL(route.request().url());
      const width = url.searchParams.get('w') || '800';
      const height = url.searchParams.get('h') || '600';

      // Redirect to a consistent placeholder service
      await route.fulfill({
        status: 302,
        headers: {
          'Location': `https://picsum.photos/${width}/${height}?seed=therapy-${width}x${height}`
        }
      });
    });

    console.log('Global setup completed successfully');
  } catch (error) {
    console.error('Error during global setup:', error);
    throw error;
  } finally {
    await context.close();
    await browser.close();
  }
}

export default globalSetup;