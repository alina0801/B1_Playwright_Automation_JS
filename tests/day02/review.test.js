/* Practice 1 - Bing Search

1.  Create a test called “Bing Search”.
2.  Navigate to: https://www.bing.com
3.  Locate the search box.
4.  Click the search box.
5.  Enter: Playwright Automation
6.  Press Enter.
7.  Observe the search results.

Methods you may need: goto() click() fill() press()
*/

import { test } from '@playwright/test'; // all our fixtures coming from there

// ADD SMOKE TEST TAG => test('Bingo Search @smoke', async ({ page }) => {
// SINGLE TAG test('Bingo Search', {tag: "smoke"}, async ({ page }) => {

    // MULTIPLE TAGS
test('Bingo Search', {tag: ['@smoke', '@regression']}, async ({ page }) => {
 
await page.goto("https://www.bing.com");

    let searchBox = page.locator("//textarea[@id='sb_form_q']");
    
    await searchBox.click();
    
    // Option 1 - for typing into the search box
    //await searchBox.fill("Playwright Automation")
    
    // Option 2 - for typing into the search box
    // await searchBox.keyboard.type("Playwright Automation");
   
    // Option 3 
    await searchBox.pressSequentially("Playwright Automation");
    await page.waitForTimeout(5000);

});