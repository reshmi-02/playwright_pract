import {test,expect, Locator} from '@playwright/test';

test('radio button actions',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   let female :Locator = page.getByLabel('Female');

  await expect(female).toBeVisible();

  await expect(female).toBeEnabled();

   expect((await female.isChecked())).toBe(false);

   await female.check();

   expect((await female.isChecked())).toBe(true);


})