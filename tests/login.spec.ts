import { test, expect } from '@playwright/test';

test('Digioh login test', async ({ page }) => {
  await page.goto('https://account.digioh.com/');
  await page.getByRole('img', { name: 'Digioh' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.fill('input[name="email"]', process.env.DIGIOH_EMAIL || '');
  await page.fill('input[name="password"]', process.env.DIGIOH_PASSWORD || '');
  await page.click('button[type="submit"]');
});
