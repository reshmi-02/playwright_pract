import {test,expect} from '@playwright/test';

test('popup window',async ({browser})=>{

     //approach 1
//    let context = await browser.newContext();
//     let page = await context.newPage();
    
   
//     await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');

//     await expect(page.locator('text=Congratulations')).toBeVisible();


//approach 2
    let context = await browser.newContext({httpCredentials:{username:"admin",password:'admin'}});
    let page = await context.newPage();
    
   
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await expect(page.locator('text=Congratulations')).toBeVisible();

})