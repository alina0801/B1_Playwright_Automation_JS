import { expect, test } from '@playwright/test';
import path from 'path'; 

test('File Upload', async ({ page }) => {

    await page.goto("http://the-internet.herokuapp.com/upload"); 
    await page.waitForTimeout(2000); 

    // Here created the file path that I want to upload 
    // /Users/feyruzshahmuradov/VSCProjects/B1_Playwright_Automation_JS/tests/day07  ./uploads/.  pic.png
    let filePath = path.join(__dirname, './uploads', 'pic.png'); 

    // Here uploading the file to the place located 
    // -- //input[@id='file-upload']
    await page.setInputFiles("//input[@id='file-upload']", filePath); 
    await page.waitForTimeout(2000); 

    // Now, we need to click submit 
    await page.locator("//input[@id='file-submit']").click(); 

    // Lastly, validated if it uploaded successfully 
    await expect ( page.locator("//h3") ).toBeVisible(); 
    await page.waitForTimeout(2000); 


});