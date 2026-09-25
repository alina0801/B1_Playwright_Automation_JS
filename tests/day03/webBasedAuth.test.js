import { expect, test } from '@playwright/test';

test('WebBased Authentication - embedded withing URL', async ({ page }) => {

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(5000);

    // HEADER AUTHORIZATION --> admin:admin ---> both go into the header authorization

    const successLogInMessage = page.locator("//p[normalize-space()='Congratulations! You must have the proper credentials.']")
    await expect(successLogInMessage).toBeVisible();
});

test('WebBased Authentication - encoded', async ({ page }) => {

    /* 
    
    1 - Encode credentials
    Buffer Class ->  HEADER AUTHORIZATION --> admin:admin ---> both go into the header authorization
     */
    //
    const encodedCreds = Buffer.from("admin:admin").toString("base64");
    console.log(encodedCreds); // -> if you want to see what is encoded 

    // Use the encoded credentials in the header
    await page.setExtraHTTPHeaders({Authorization: `Basic ${encodedCreds}`});

    await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    await page.waitForTimeout(5000);
    
    const successLogInMessage = page.locator("//p[normalize-space()='Congratulations! You must have the proper credentials.']")
    await expect(successLogInMessage).toBeVisible();
});

