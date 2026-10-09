import { expect, test } from '@playwright/test';

test('Open Multiple tabs in Same Browser', async ({ context }) => {

    // First Tab/Page 
    let tab1 = await context.newPage(); 
    await tab1.goto("https://www.google.com");
    //await tab1.waitForTimeout(2000);

    // Second Tab/Page
    let tab2 = await context.newPage();    
    await tab2.goto("https://www.github.com");
    //await tab2.waitForTimeout(2000);


    // Third Tab/Page
    let tab3 = await context.newPage();    
    await tab3.goto("https://www.linkedin.com");
    //await tab3.waitForTimeout(2000);


    // Fourth Tab/Page
    let tab4 = await context.newPage();    
    await tab4.goto("https://www.loopcamp.io");
    //await tab4.waitForTimeout(2000);


    //--------------------------------------------------------------------

    // validating something in FIRST Tab
    let searBox = tab1.locator("//textarea[@aria-label='Search']");
    await expect(searBox).toBeVisible(); 


    // validating something in SECOND Tab
    let emailBox = tab2.locator("(//input[@name='user_email'])[1]"); 
    await expect (emailBox).toBeVisible(); 


    // validating something in THIRD Tab 
    let navigationLogo = tab3.locator("//icon[@data-test-id='nav-logo']"); 
    await expect (navigationLogo).toBeVisible(); 


    // validating something in FOURTH Tab 
    await expect (tab4.locator("//div[@id='comp-lk5tbxga']//a")).toBeVisible();

    // The above is same as this 
    //let loopcampLogo = tab4.locator("//div[@id='comp-lk5tbxga']//a"); 
    //await expect (loopcampLogo).toBeVisible(); 


    await tab1.bringToFront();
    await tab1.waitForTimeout(1000);
    await tab2.bringToFront();
    await tab2.waitForTimeout(1000);
    await tab3.bringToFront();
    await tab3.waitForTimeout(1000);
    await tab4.bringToFront();
    await tab4.waitForTimeout(1000);

    await tab2.close();
    await tab4.waitForTimeout(2000);

});