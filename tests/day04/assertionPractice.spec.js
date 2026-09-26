import { expect, test } from '@playwright/test'

const baseUrl = "https://the-internet.herokuapp.com"

// * --- 1. Element assertions - URL & title -----------------------------------------------------
test('Practicing assertions - URL and title', async ({ page }) => {
    //await page.goto(baseUrl + "")
    await page.goto(`${process.env.BASE_URL}/login`);
    await page.waitForTimeout(3000);

    await expect(page).toHaveTitle("The Internet");
    // EXPECTED:      ->    The Internet
    // ACTUAL:        ->    await expect(page).toHaveTitle();


    // think that you have clicked the element and it took you to new URL, now validate URL
    await expect(page).toHaveURL(`${baseUrl}/login`);
});

// * --- 2. Element assertions - visibility & state -----------------------------------------------------
test('element - visible, hidden, enabled, disabled  ', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/dynamic_controls`);
    //await page.waitForTimeout(5000); 

    const checkbox = page.locator("//input[@type='checkbox']");
    const input = page.locator("//form[@id='input-example']//input[@type='text']");

    await expect(checkbox).toBeVisible();
    await expect(input).toBeDisabled();


    const removeButton = page.locator("//form[@id='checkbox-example']//button[@type='button' and normalize-space()='Remove']")
    await removeButton.click();
    //await page.waitForTimeout(5000); 
    await expect(checkbox).toBeHidden();
    await expect(page.locator("//form[@id='checkbox-example']//p[@id='message']")).toHaveText("It's gone!");


    await page.locator("//form[@id='input-example']//button[@type='button' and normalize-space()='Enable']").click();
    await page.waitForTimeout(5000);
    await expect(input).toBeEnabled();
    await expect(input).toBeEditable();

});

// * --- 3. Element assertions - checked -----------------------------------------------------
test('element - checked / not checked', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/checkboxes`);
    await page.waitForTimeout(5000);
    const checkboxes = page.locator('#checkboxes input[type="checkbox"]');

    const checkbox1 = page.locator('#checkboxes input[type="checkbox"]').first();
    const checkbox2 = page.locator('#checkboxes input[type="checkbox"]').nth(1);

    await expect(checkbox1).not.toBeChecked(); // NOT operator
    await expect(checkbox2).toBeChecked();

    //await checkbox1.click();
    await checkbox1.check();
    await page.waitForTimeout(3000);
    await expect(checkbox1).toBeChecked();

    await checkbox1.uncheck();
    await page.waitForTimeout(3000);
    await expect(checkbox1).not.toBeChecked();
});

// * --- 4. Element assertions - text, values, attribute -----------------------------------------------------
test('element - text, values, attribute', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/login`);

    expect(page.getByRole('heading', { name: 'Login Page', level: 2 }));
    await expect(page.locator('h4.subheader')).toContainText("tomsmith");

    const usernameField = page.getByLabel('Username');
    await usernameField.fill("tomsmith");

    await expect(usernameField).toHaveValue("tomsmith");

    expect(usernameField).toHaveAttribute("type", "text");
});

// * --- 5. Element assertions - count -----------------------------------------------------
test('element - count', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/add_remove_elements/`);
    const addButton = page.getByRole('button', { name: 'Add Element' });
    const deleteButton = page.getByRole('button', { name: 'Delete' });
    await expect(deleteButton).toHaveCount(0);

    await addButton.click();
    await addButton.click();
    await addButton.click();

    await expect(deleteButton).toHaveCount(3);
    await expect(deleteButton).toHaveText(["Delete", "Delete", "Delete"]);
});

// * --- 6. Values assertions - count -----------------------------------------------------
test('element - dropdown', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/dropdown`);
    const dropdown = page.locator('select#dropdown');
    await dropdown.click();

    const dropdownOptions = page.locator('#dropdown option');
    const dbCount = await dropdownOptions.count();
    const dbListTexts = await dropdownOptions.allInnerTexts();
    const title = await page.title();

    // Validating the values - no promise in here so no await keyword, if fails there is no retry

    //await expect(dropdownOptions).toHaveCount(3);
    expect(dbCount).toBe(3);
    expect(dbListTexts).toContain("Option 1");
    expect(dbListTexts).toEqual(["Please select an option", "Option 1", "Option 2"]);
    expect(dbCount).toBeGreaterThan(2);
    expect(dbCount).toBeLessThanOrEqual(20);
    expect(title.length).toBeLessThanOrEqual(12);
});

// * --- 7. Hard assertions -----------------------------------------------------
test('hard - stops', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/login`);
    await expect(page.locator("//h2")).toBeVisible();

    console.log("HARD ASSERTION 1 - Passed");

    const usernameField = page.getByLabel('Username');
    await expect(usernameField).toBeVisible();
    console.log("HARD ASSERTION 2 - Passed");

     const loginButton = page.getByRole("button", { name: "Login" });
    await expect(loginButton).toContainText("Login");
    console.log("HARD ASSERTION 3 - Passed");
    await expect(loginButton).toContainText("Sign in");
    console.log("HARD ASSERTION 4 - Failed"); // with HARD assertion, once the code fails automation stops - hard assertion only affect the single test only 
});

// * --- 8. Soft assertions -----------------------------------------------------
test('soft - reports and continues', async ({ page }) => {
    await page.goto(`${process.env.BASE_URL}/login`);

    await expect(page.locator("//h2")).toBeVisible();
    console.log("SOFT ASSERTION 1 - Passed");

    const usernameField = page.getByLabel('Username');
    await expect(usernameField).toBeVisible();
    console.log("SOFT ASSERTION 2 - Passed");

    const loginButton = page.getByRole("button", { name: "Login" });
    expect.soft(loginButton).toContainText("Login");
    console.log("SOFT ASSERTION 3 - completed");

    await expect(loginButton).toContainText("Sign in");
    console.log("SOFT ASSERTION 4 - Failed"); // with SOFT assertion, once the code fails automation records what failed and continues and at the end it reports what failed 
});

