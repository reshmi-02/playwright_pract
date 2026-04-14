import {test,expect, Locator} from '@playwright/test';

test("Get by alt locator" ,async ({page})=>{

    await page.goto('https://www.nopcommerce.com/en')

   let logo : Locator = page.getByAltText('nopCommerce');

   await expect(logo).toBeVisible();
})


test("get by text",async ({page})=>{
    await page.goto('https://www.nopcommerce.com/en')

   let data : Locator= page.getByText("Free and open-source eCommerce platform");
    await  expect(data).toBeVisible();
})

test("get by role" ,async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

   let button :Locator= page.getByRole('button',{name:'Primary Action'});
  await expect(button).toBeVisible();

  await  button.click();
})

test("get by label",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

   let email :Locator = page.getByLabel('Email Address:');

  await  email.fill("priya@gmail.com")
})

test("get by placeholder",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

   let name :Locator = page.getByPlaceholder('Enter your full name');

  await  name.fill("priya")
})

test("get by title",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

   let home :Locator = page.getByTitle('Home page link');

  await  expect(home).toBeVisible();

  await expect(home).toHaveText("Home");

  await home.click();
})


test("get by test id ",async ({page})=>{

   await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');

   let name :Locator= page.getByTestId('profile-name');

   await expect(name).toHaveText('John Doe');
})