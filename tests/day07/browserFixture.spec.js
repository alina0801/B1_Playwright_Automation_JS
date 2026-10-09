import { test } from '@playwright/test';

test('Open Multiple Tabs in Mulltiple Browsers', async ({ browser }) => {

    // First Browser
    let browser1 = await browser.newContext(); 
    // Open some tabs in FIRST Browser
    let b1tab1 = await browser1.newPage();
    let b1tab2 = await browser1.newPage();
    let b1tab3 = await browser1.newPage();
    await  b1tab1.waitForTimeout(4000); 




    // Second Browser
    let browser2 = await browser.newContext(); 
    let b2tab1 = await browser2.newPage();
    let b2tab2 = await browser2.newPage();
    await b2tab1.waitForTimeout(4000); 



    // Now goto some pages FIRST  browser
    b1tab1.goto("https://www.google.com"); 
    await  b1tab1.waitForTimeout(2000);

    b1tab2.goto("https://www.amazon.com"); 
    await  b1tab1.waitForTimeout(2000);

    b1tab3.goto("https://www.youtube.com"); 
    await  b1tab1.waitForTimeout(2000);


    // Now goto some pages Second  browser
    b2tab1.goto("https://www.facebook.com"); 
    await  b1tab1.waitForTimeout(2000);

    b2tab2.goto("https://www.instagram.com"); 
    await  b1tab1.waitForTimeout(2000);


    // bring to front 
    await b1tab1.bringToFront(); 
    await b1tab1.waitForTimeout(2000); 

    await b2tab1.bringToFront(); 
    await b2tab1.waitForTimeout(2000); 


});