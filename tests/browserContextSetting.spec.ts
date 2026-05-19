import {test,expect, chromium} from '@playwright/test';

test('browser context',async ()=>{

    // let browser = await chromium.launch({headless:true})  //run in headless mode 
    let browser = await chromium.launch({headless:false})  //run in head mode 

    // let context =await browser.newContext({
    //     viewport:{width:800,height:800},
    //     locale:'it-IT',
    //     ignoreHTTPSErrors:true
    // }) // if we set the settin gin global no need to add this in particular file 

     let context =await browser.newContext()

    let page = await context.newPage();
    await page.goto('https://expired.badssl.com/')

    await page.waitForTimeout(5000);
})