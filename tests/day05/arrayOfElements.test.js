import { test, expect } from '@playwright/test'

/*
    Task:
        1. Verify that there are exactly 50 link elements which in the <ul> tag
        2. Verify that each of the 50 link elmenets which the <ul> tag is visible and clickable
        3. Verify that each of the 50 link elmenets which the <ul> tag has href attribut
*/
test.describe("Array of Elements", () => {
    let allLinks;
    test.beforeEach(async ({ page }) => {

        await page.goto(`${process.env.LC_PRACTICE_BASE_URL}`);
        allLinks = await page.locator('ul.list-group.list-group-flush a').all();

    });

    test('Verify that there are exactly 50 link elements which in the <ul> tag', async ({ page }) => {

        expect(allLinks.length).toBe(50);
        expect(allLinks.length).toBeLessThan(60);
        expect(allLinks.length).toBeGreaterThanOrEqual(40);

    });

    test('Verify that each link in the <ul> tag is visible and clickable', async ({ page }) => {
        let i = 1;
        for (let eachElement of allLinks) {
            await expect(eachElement).toBeVisible();
            await expect(eachElement).toBeEnabled();
            console.log(i++);
        }
    });

    test('Verify that each link in the <ul> tag has an href attribute', async ({ page }) => {
        for (let eachElem of allLinks) {
            let eachElemHrefValue = await eachElem.getAttribute("href");
            expect(eachElemHrefValue).not.toBeNull();
            console.log(eachElemHrefValue);
        }
    });
});