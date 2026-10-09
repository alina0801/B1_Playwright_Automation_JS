import { test, expect } from '@playwright/test'

/* 
* Test Case
    Navigate to /windows
    click on "Click Here"
    Validate new tab has title 'New Window'
*/

test('Multiple Windows - Window Pop Up', async ({ page }) => {

    // create an eventlistener for monitoring winow popup/new tab
    let newPopupEventPromise = page.waitForEvent("popup");

    //await page.goto("https://loopcamp.vercel.app/windows.html");
    await page.goto(`${process.env.LC_PRACTICE_BASE_URL}windows.html`);

    // Playwright uses "baseURL" (exact match) -> automaticaly and appends whatever String you have
    //await page.goto("windows.html");

    await page.locator("//a[text()='Click Here']").click();
    await page.waitForTimeout(2000);

    let newTab = await newPopupEventPromise;

    // Validating the new tab
    await expect(newTab).toHaveTitle("New Window");

    // Validating the orginal tab
    await expect(page).toHaveTitle("Windows");

    // Switching back to original tab
    await page.bringToFront();

    // Switch back to the 2nd tab
    await newTab.bringToFront();

    // Get all the tabs
    let allTabs = page.context().pages();
    console.log(allTabs.length);

    for (let eachTab of allTabs) {
        console.log(await eachTab.title());
    }

    await newTab.close();
    await page.waitForTimeout(2000);
});