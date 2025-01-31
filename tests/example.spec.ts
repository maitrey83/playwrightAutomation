import { test, expect } from '@playwright/test';

test.describe('Example Test Suite', () => {
  
  test('should load the homepage', async ({ page }) => {
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('should navigate to the about page', async ({ page }) => {
    await page.goto('https://example.com');
    await page.click('text=More information...');
    const title = await page.title();
    expect(title).toBe('IANA — IANA-managed Reserved Domains');
  });

  test('should check for a specific element on the homepage', async ({ page }) => {
    await page.goto('https://example.com');
    const element = await page.locator('h1');
    await expect(element).toHaveText('Example Domain');
  });

});