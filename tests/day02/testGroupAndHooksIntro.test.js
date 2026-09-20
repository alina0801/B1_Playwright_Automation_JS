import { test } from '@playwright/test'


     // This will be executed before each test one time
    test.beforeEach(async ({ page }) => {
        console.log("Login into the page");
    });

test.describe("Login and validate Header, Middle and Footer 1", () => {
 
    // This will be executed before all tests one time
    test.beforeAll(async ({ }) => {
        console.log("Turn computer on");
    });

    // This will be executed after all tests one time
    test.afterAll(async ({ }) => {
        console.log("Turn computer off");
    });

  /*      // This will be executed before each test one time
    test.beforeEach(async ({ page }) => {
        console.log("Login into the page");
    }); */

    // This will be executed after each test one time
    test.afterEach(async ({ page }) => {
        console.log("Log out from the page");
    });

    test('Sample Test 01 - Verifying the header of the page', { tag: ["@TC-01", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 01 is running ...... validation for header");
        //console.log("Log out from the page");
    });

    test('Sample Test 02 - Verifying the middle part of the page', { tag: ["@TC-02", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 02 is running ...... validation for middle");
        //console.log("Log out from the page");
    });

    test('Sample Test 03 - Verifying the footer of the page', { tag: ["@TC-03", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 03 is running ...... validation for footer");
        //console.log("Log out from the page");
    });
});


test.describe("Login and validate Header, Middle and Footer 2", () => {
 
    // This will be executed before all tests one time
    test.beforeAll(async ({ }) => {
        console.log("Turn computer on");
    });

    // This will be executed after all tests one time
    test.afterAll(async ({ }) => {
        console.log("Turn computer off");
    });

  /*      // This will be executed before each test one time
    test.beforeEach(async ({ page }) => {
        console.log("Login into the page");
    }); */

    // This will be executed after each test one time
    test.afterEach(async ({ page }) => {
        console.log("Log out from the page");
    });

    test('Sample Test 04 - Verifying the header of the page', { tag: ["@TC-04", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 04 is running ...... validation for header");
        //console.log("Log out from the page");
    });

    test('Sample Test 05 - Verifying the middle part of the page', { tag: ["@TC-05", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 05 is running ...... validation for middle");
        //console.log("Log out from the page");
    });

    test('Sample Test 06 - Verifying the footer of the page', { tag: ["@TC-06", "@smoke", "@regression"] }, async ({ page }) => {
        //console.log("Login into the page");
        console.log("Test Case 06 is running ...... validation for footer");
        //console.log("Log out from the page");
    });
});

