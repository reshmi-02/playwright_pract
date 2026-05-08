import {test,expect, chromium} from '@playwright/test'

test('browser context',async ()=>{

   let chromebrowser =  await chromium.launch();
    let context =await chromebrowser.newContext();
    let page1 = await context.newPage();
    let page2 = await context.newPage();

    console.log('no of pages in context ',  context.pages().length);
    
    await page1.goto('https://www.google.com/');
    console.log(await page1.title());
    
    await page2.goto('https://www.facebook.com/');
    console.log(await page2.title());
    
})