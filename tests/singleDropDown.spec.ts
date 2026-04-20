import {test,expect, Locator} from '@playwright/test';

test('singleDropDown selection' ,async ({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/');

    let dropdown :Locator =  page.locator('#country');

    await dropdown.selectOption('India') //select by visible text
    // await dropdown.selectOption({value:'japan'}) //select by value attribute
    // await dropdown.selectOption({label:'India'}) //select by label
    // await dropdown.selectOption({index : 3});

    //get the selected option value 

     let value : string = await dropdown.inputValue();
    console.log(value);
     expect(value).toBe('india');
    

    //count the number of options present in the dropdown
    let options :Locator = page.locator('#country option');
    let count :number =await options.count();
     expect(count).toBe(10);


    let allOptionText :string[] = await options.allTextContents();
    let trimOptionText: string[] = allOptionText.map((e=>e.trim() ));

    console.log(allOptionText);
    console.log(trimOptionText);

    expect(trimOptionText).toContain('Japan');

    for(let a of trimOptionText){
        console.log(a);     
    }
    
    
})