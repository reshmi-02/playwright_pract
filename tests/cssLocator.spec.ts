import {test,expect, Locator} from '@playwright/test'

test('get by class',async ({page})=>{

    await page.goto('https://www.google.com/')

    await page.locator('textarea.gLFyf').fill("selenium");


})

test('get by attribute',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id='name']").fill("selenium");


})


test('mutiple attribute selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id='name'][placeholder='Enter Name']").fill("selenium");


})

test('contains selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id*='me']").fill("selenium");


})

test('starts with selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id^='na']").fill("selenium");


})

test('ends with selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id$='me']").fill("selenium");


})

test('or selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id$='me'],#name").fill("selenium");


})

test('not selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("input[id='name']:not([fdprocessedid='vmuzc'])").fill("selenium");


})

test('child selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //first child
    let first :Locator = page.locator("span[class='wikipedia-search-bar']>span:first-child");

   await expect(first).toBeVisible();

    //last child
    let last :Locator = page.locator("span[class='wikipedia-search-bar']>span:last-child");

   await expect(last).toBeVisible();

   //nth child
    let nth :Locator = page.locator("span[class='wikipedia-search-bar']>span:nth-child(1)");

   await expect(nth).toBeVisible();

   //nth method 
    let nthmethpd :Locator = page.locator("span[class='wikipedia-search-bar']>span").nth(0);

   await expect(nthmethpd).toBeVisible();
})