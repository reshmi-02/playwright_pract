import {test,expect,Locator} from '@playwright/test'

test('select any one',async ({page})=>{

    await page.goto('https://letcode.in/radio');

    let yes :Locator = page.locator('#yes');
    let no : Locator = page.locator('#no');

    await yes.check();

    await expect(yes).toBeChecked();

    await expect(no).not.toBeChecked();

})


test('confirm you can select any one button',async ({page})=>{

    await page.goto('https://letcode.in/radio');

    let yes :Locator = page.locator('#one');
    let no : Locator = page.locator('#two');

    await yes.check();

    await expect(yes).toBeChecked();

    await expect(no).not.toBeChecked();

})

test('find the bug',async ({page})=>{

    await page.goto('https://letcode.in/radio')


    const radios :Locator = page.locator("//label[text()='Find the bug']/following-sibling::div//input");
  const count = await radios.count();

  for (let i = 0; i < count; i++) {
    await radios.nth(i).click();

    for (let j = 0; j < count; j++) {
      if (i === j) {
        await expect(radios.nth(j)).toBeChecked();   // selected one
      } else {
        await expect(radios.nth(j)).not.toBeChecked(); // others not selected
      }
    }
  }

} )


test('Find selected radio', async ({ page }) => {
  await page.goto('https://letcode.in/radio');

  const foo = page.locator('#foo');
  const bar = page.locator('#notfoo');

  if (await foo.isChecked()) {
    console.log('Foo is selected');
  } else if (await bar.isChecked()) {
    console.log('Bar is selected');
  }
});


test('Check disabled radio', async ({ page }) => {
  await page.goto('https://letcode.in/radio');

  const maybe = page.locator("//label[text()='Confirm last field is disabled']/following-sibling::div/label[last()]/input");

  await expect(maybe).toBeDisabled();
});

test('Checkbox validation', async ({ page }) => {
  await page.goto('https://letcode.in/radio');

  const checkbox = page.locator("//label[text()='Find if the checkbox is selected?']/following-sibling::label//input"); // adjust if needed

  await expect(checkbox).toBeChecked();
});

test('Accept T&C', async ({ page }) => {
  await page.goto('https://letcode.in/radio');

  const tc = page.locator("//label[text()='Accept the T&C']/following-sibling::label//input");

  await tc.check();
  await expect(tc).toBeChecked();
});