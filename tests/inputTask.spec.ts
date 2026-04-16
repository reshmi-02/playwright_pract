import {test,expect, Locator} from '@playwright/test';

test('input test',async ({page})=>{

    await page.goto('https://letcode.in/edit')

   await page.getByPlaceholder('Enter first & last name').fill('priya')

    let input :Locator = page.locator('#join');
    await input.fill(' sathish');
   await  input.press('Tab');

   let data :string =await page.locator('#getMe').inputValue();
    console.log(data);

   await page.locator('#clearMe').clear();

   let input2 : Locator =page.locator('#dontwrite');
   
   expect(input2).toHaveAttribute('readonly',"");
   
})