import { test,expect } from "@playwright/test";

test('Mouse operations', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   let pointme= page.locator('button.dropbtn');
 await pointme.hover();

   await page.locator("//a[text()='Laptops']").hover();


})



test('RIght click operations', async ({page})=>{

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

   let button= page.locator('span.context-menu-one');
    await button.click({button:'right'});

})


test('Double click operations', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

   let button= page.locator('button[ondblclick="myFunction1()"]');
    await button.dblclick();

    let field = page.locator('#field2');
     await expect(field).toHaveValue('Hello World!')

})


test('drag and drop operations', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let drag = page.locator('div#draggable');
    let drop = page.locator('div#droppable');

    //approach1

    //  await drag.hover();
    //  await page.mouse.down();
    //  await drop.hover();
    //  await page.mouse.up();

    //approach 2
    await drag.dragTo(drop);
})