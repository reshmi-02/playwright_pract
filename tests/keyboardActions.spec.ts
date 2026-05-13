import {test,expect} from '@playwright/test';

test('keyboard actions', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    let input= page.locator('input#input1');

    //focus 
    await input.focus();  //or await input.click();

    //value 
    await page.keyboard.insertText('Welcome') //or await input.fill('data') , await page.keyboard.type(data)

    //select value 

    await page.keyboard.down('Control');
    await page.keyboard.press('A');
    await page.keyboard.up('Control');

    //copy
    await page.keyboard.down('Control');
    await page.keyboard.press('C');
    await page.keyboard.up('Control');

    //tab 
    await page.keyboard.press('Tab')
     await page.keyboard.press('Tab')

     //paste
      await page.keyboard.down('Control');
    await page.keyboard.press('V');
    await page.keyboard.up('Control');
} )