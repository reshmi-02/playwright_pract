import {test,expect,Locator} from '@playwright/test'

test('compare methods',async ({page}) => {
    
    await page.goto('https://demowebshop.tricentis.com/')

    let titles : Locator = page.locator('h2.product-title');

    console.log(await titles.count());
    
//compare innertext vs textcontent 
    for(let i :number =0;i<await titles.count() ;i++){
     console.log( await  titles.nth(i).innerText());
     
      console.log( await titles.nth(i).textContent());
      
    }


    //compare alltext content vd allinnertext
    console.log(await titles.allTextContents());
    console.log(await titles.allInnerTexts());
    
    
    //all() -> convert locator into array of locators 

   let titleLocators : Locator[]= await titles.all();
   console.log(titleLocators);

   for(let poition in titleLocators){

      console.log(await titleLocators[poition].innerText());
      ;

   }
   
})