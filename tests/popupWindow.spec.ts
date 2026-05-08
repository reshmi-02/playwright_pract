import {test,expect} from '@playwright/test';

test('popup window',async ({browser})=>{

   let context = await browser.newContext();
    let page = await context.newPage();
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.waitForEvent('popup');
    // await page.locator('#PopUp').click();

    await Promise.all([ page.waitForEvent('popup'), page.locator('#PopUp').click()])

    await page.waitForTimeout(3000);

    let allwindows= context.pages();

    await page.waitForTimeout(3000);

    console.log(allwindows.length);

    console.log(allwindows[0].url());
    console.log(allwindows[1].url());
    console.log(allwindows[2].url());
    
    for(let window of allwindows){
        console.log(await window.title());
        let title = await window.title();

        if(title.includes('Playwright')){
           await window.locator('.getStarted_Sjon').click();
           await window.waitForTimeout(3000);
           await window.close();
           break;
        }
    }
    
    await page.waitForTimeout(3000);

})