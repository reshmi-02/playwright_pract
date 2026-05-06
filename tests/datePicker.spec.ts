import {test,expect, Locator,Page  } from "@playwright/test";



async function picker(month:string , year:string,date:string,page:Page){
 

 while(true){
    let mon= await page.locator('.ui-datepicker-month').textContent();
   
    let yr = await page.locator('.ui-datepicker-year').textContent();

    if(month==mon && year==yr){
        break
    }
    else{
        if(Number(year)>=2026){
           await page.locator("//span[text()='Next']").click();
        }
        else{
            await page.locator("//span[text()='Prev']").click();
        }
    }
 }

 let dates : Locator[] =await page.locator(".ui-datepicker-calendar td>a").all();

 for(let e of dates){
     if(await e.innerText() == date){
       await e.click();
        break;
     }
 }

}

test('date picker using function',async ({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/')


let date : string="25",month : string='June',year : string="2025";

 await page.locator('#datepicker').click();

 await picker(month,year,date,page);


})


test('date picker',async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/')

//    await page.locator('#datepicker').fill('04/15/2026');

let date : string="25",month : string='June',year : string="2027";

 await page.locator('#datepicker').click();

 while(true){
    let mon= await page.locator('.ui-datepicker-month').textContent();
   
    let yr = await page.locator('.ui-datepicker-year').textContent();

    if(month==mon && year==yr){
        break
    }
    else{
        await page.locator("//span[text()='Next']").click();
    }
 }

 let dates : Locator[] =await page.locator(".ui-datepicker-calendar td>a").all();

 for(let e of dates){
     if(await e.innerText() == date){
       await e.click();
        break;
     }
 }

})


