// Option 1 - This is another way to do the import
// {} - > hold CNRL + SPACE -> this will show what can be imported
// const {test} = require ('playwright/test')

// Option 2 - Import
// {} - > hold CNRL + SPACE -> this will show what can be imported
import { test } from '@playwright/test';

// test (){ --> needs 2 arguments
// "test description"   --> desription of the test
// async ({page})       --> async callback
// page called ------> fixture {page} = driver for the webpage (similar to WebDriver driver in selenium)
//                     page fixture has some reusable methods to for web based application

test("Simple Google Search @smoke", async ({ page }) => {

    // This is hard coded wait - DO NOT USE IT IN YOUR AUTOMATION
    // await page.waitForTimeout(3000);

    // Because the assync nature of Playwright use the "await" keyword
    await page.goto("https://www.google.com");


    let searchBox = page.locator("//textarea[@aria-label='Search']");
    await page.waitForTimeout(3000);
    await searchBox.fill("Playwright Automation");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");
    await page.waitForTimeout(3000);
});

test("YouTube page navigation", {tag: "@regression"}, async ({ page }) => {

  await page.goto("https://www.youtube.com/");
  //let searchBox = page.getByRole('combobox', { name: 'Search' });
  let searchBox = page.locator("//input[@placeholder='Search']");
  await searchBox.click();
  await searchBox.fill("Minions");
  await page.waitForTimeout(3000);

  await searchBox.press("Enter");
  await page.waitForTimeout(3000);

  let firstVideo = page.locator("//yt-formatted-string[@aria-label='Minions - Funniest Scenes 54 minutes']");
  //let firstVideo = page.getByText('Minions - Funniest Scenes', { exact: true });
  await firstVideo.click();
  await page.waitForTimeout(3000);
});