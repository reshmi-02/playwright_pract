import {test,expect, Locator} from '@playwright/test'

test('xpath contains method', async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/');

    let elements :Locator =  page.locator("//h2//a[contains(text(),'computer')]");

    let elementcount :number =await elements.count();

     expect(elementcount).toBeGreaterThan(0);

     //get first element text
    console.log("first element :", await elements.first().textContent());
    
    //get the last element text
    console.log("last element :", await elements.last().textContent());

    //get the nth element text
    console.log("nth element element :", await elements.nth(1).textContent());

    //get all text 
    let alltext : string[] = await elements.allTextContents();  
    console.log(alltext);

    for(let data of alltext){
        console.log(data);
        
    }
      
})


test('xpath last  selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let element :Locator= page.locator("//span[@class='wikipedia-search-bar']/span[last()]");

    await expect(element).toBeVisible();

})





test('xpath position  selector',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    let element :Locator= page.locator("//span[@class='wikipedia-search-bar']/span[position()=1]");

    await expect(element).toBeVisible();

})


test('xpath axes  selector',async ({page})=>{

    await page.goto('https://demowebshop.tricentis.com/')

    let atag :Locator= page.locator("//a[text()='$25 Virtual Gift Card']");

    let text = await atag.textContent();

    await expect(atag).toBeVisible();
    await expect(atag).toHaveText('$25 Virtual Gift Card');
    await expect(atag).toContainText('Gift Card'); //or tocontainsclass 
    await expect(atag).toHaveAttribute('href','/25-virtual-gift-card');
     expect(text).toBe('$25 Virtual Gift Card');
    let element:Locator = page.locator("//h2//a[contains(text(),'computer')]");

    await expect(element).toHaveCount(3);
   
})
