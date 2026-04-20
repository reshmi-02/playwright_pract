import {test,expect,Locator} from '@playwright/test'

test('select multipleoptions', async ({page})=>{

  await page.goto('https://testautomationpractice.blogspot.com/');
  
      let dropdown :Locator =  page.locator('#colors');

    //   await dropdown.selectOption(["Yellow","White"]); //select by visible text
    // await dropdown.selectOption(['red','blue']) //select by value attribute
    // await dropdown.selectOption([{label:'Red'},{label:'Blue'}]) //select by label
    await dropdown.selectOption([{index : 3},{index:1}]);

    let options :Locator = page.locator('#colors option');
  await expect(options).toHaveCount(7);

})


test('sorted dropdown' , async({page})=>{

    
     await page.goto('https://testautomationpractice.blogspot.com/');
  
      let options :Locator =  page.locator('#colors option');

    let allOptionText:string[]=  (await options.allTextContents()).map((text=>text.trim()));

    let sortedOptions :string[] = [...allOptionText].sort();

    console.log(allOptionText);
    console.log(sortedOptions);
    
    
})