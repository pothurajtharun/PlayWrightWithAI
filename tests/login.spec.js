// @ts-check
import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Login to sauce demo website.', async ({ page }) => {

  // An object with page and test must be passed into every call
  const aiArgs = { page, test }
  await page.goto('https://www.saucedemo.com/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Swag Labs");
  await ai('Enter the name "standard_user" as Username.',aiArgs);
  await ai('Enter the name "secret_sauce" as Password.',aiArgs);
  await ai('Click Login button.',aiArgs);
});