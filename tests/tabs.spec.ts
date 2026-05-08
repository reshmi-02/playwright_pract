import { test,expect,chromium} from "@playwright/test";

test('tabs',async ()=>{
     let chromebrowser =  await chromium.launch();
    let context =await chromebrowser.newContext();
    let page1 = await context.newPage();
   await  page1.goto('https://testautomationpractice.blogspot.com/');

//    await context.waitForEvent('page')
//     await page1.locator('button[onclick="myFunction()"]').click();

    let [child] = await Promise.all([ context.waitForEvent('page'),page1.locator('button[onclick="myFunction()"]').click()])

    let pages= context.pages();
    console.log(pages.length);

    //approach1 
    console.log( await pages[0].title());
    console.log(await pages[1].title());
    
    //approach2
    console.log(await page1.title());
    console.log(await child.title());
    
    
   await page1.waitForTimeout(3000);


})