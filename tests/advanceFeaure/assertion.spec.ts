import {test,expect} from '@playwright/test';

test('autowaiting', async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

   await expect.soft(page).toHaveURL('https://sdemowebshop.tricentis.com/',{timeout:10000});

   await  page.locator('input#small-searchterms').fill('laptop',{force:true});

   await page.locator('input.search-box-button').click();

  

})