import {test,expect, Locator} from '@playwright/test'

test('test input actions',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

   let input :Locator = page.locator('#name');

   await expect(input).toBeVisible()

   await expect(input).toBeEnabled();

   let data :string | null =await input.getAttribute('maxlength');
   expect(data).toBe('15');

    await expect(input).toHaveAttribute('maxlength','15');

   await  input.fill('priya');

   let value : string = await input.inputValue();
 expect(value).toBe('priya')

 await page.waitForTimeout(3000);
})