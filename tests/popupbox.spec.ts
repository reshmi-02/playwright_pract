import {test,expect} from '@playwright/test';


test('simple alert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

     page.on('dialog',(dialog)=>{
       console.log(dialog.type());
       expect(dialog.type()).toBe('alert');
       console.log(dialog.message());
       
       dialog.accept();
    })

    await page.locator('#alertBtn').click();

   
})


test('confirm alert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

     page.on('dialog',(dialog)=>{
       console.log(dialog.type());
       expect(dialog.type()).toBe('confirm');
       console.log(dialog.message());
       
       dialog.accept();
    })

    await page.locator('#confirmBtn').click();

   
})


test('prompt alert',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

     page.on('dialog',(dialog)=>{
       console.log(dialog.type());
       expect(dialog.type()).toBe('prompt');
       console.log(dialog.message());
       
       dialog.accept('Reshmi');
    })

    await page.locator('#promptBtn').click();

    let text =await page.locator('#demo').innerText();
   expect(text).toBe('Hello Reshmi! How are you today?')
})