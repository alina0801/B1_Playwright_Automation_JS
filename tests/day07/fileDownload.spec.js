import { expect, test } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Download', async ({ page }) => {

    let downloadPromise = page.waitForEvent("download");

    await page.goto(`${process.env.LC_PRACTICE_BASE_URL}download.html`);

    // page.locator("//a[text()='some-file.txt']").click();
    page.click("text='some-file.txt'");

    // since the event happen , we can resolve the promise
    let downloadHandler = await downloadPromise;

    //path.join(); ----> this helps as to provide full directory path
    // __dirname -----> this will give the directory what the test file is 
    // '/Users/alina/Desktop/Screenshot 2026-10-08 at 4.56.15 PM.png'
    // /Users/alina/VSCProjects/B1_Playwright_Automation_JS/tests/day07/ /downloads. /some-file.txt

    // Here we generated the path to save the file at
    let downloadPath = path.join(__dirname, './downloads', downloadHandler.suggestedFilename());

    // Here we will actually save the file
    await downloadHandler.saveAs(downloadPath);

    // As a tester I need to validate if it actually downloaded.
    expect (fs.existsSync(downloadPath)).toBeTruthy();
});