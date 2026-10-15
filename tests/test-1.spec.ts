import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.getByRole('textbox', { name: 'Jane Doe' }).fill('Mark Loop');
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('test@gmail.com');
  await page.getByText('Remember me').first().click();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByLabel('Remember me').check();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
});