import {test,expect, Locator} from '@playwright/test';

test('Dynamic dropdown', async ({page})=>{

    await page.goto('https://www.flipkart.com/');

   let search :Locator =  page.locator("(//input[@name='q'])[1]");

   await search.fill('smart');

   await page.keyboard.press("Enter");

   await page.waitForTimeout(8000);

   let options :Locator = page.locator("//form[@action='/search']/ul/li");

   let count : number = await options.count();

   console.log("count : ",count);

   //printing all the options 

   for(let i=0 ;i<count;i++){

    console.log( await options.nth(i).innerText());
    

   }
   

   //click the one option 
   
   for(let i=0 ;i<count;i++){

   if(await options.nth(i).innerText() == 'smartphone'){
    await options.nth(i).click();
    break;
   }
    

   }
})


test('dynamic dropdown in orange hrm',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForTimeout(8000);

    await page.getByPlaceholder('Username').fill('Admin');

    await page.getByPlaceholder('Password').fill('admin123');

    await page.locator("button[type='submit']").click();

    await page.waitForTimeout(3000);

    await page.getByText('PIM').click();

})