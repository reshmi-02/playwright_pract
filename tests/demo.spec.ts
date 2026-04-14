import {expect, test} from '@playwright/test'

test('verify google page title ',async ({page})=>{
    console.log("I am in test 1");
    
   await page.goto('https://www.google.com/?zx=1774605415298&no_sw_cr=1');

   await expect(page).toHaveTitle("Google")

})

test('validate facebook page title',async ({page})=>{
    console.log("I am in test 2");
    
    await page.goto('https://www.facebook.com/');

    await expect(page).toHaveTitle("Facebook");
})