import {test,expect, Locator} from '@playwright/test'

test('check the single box',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    let sunday : Locator = page.getByLabel('Sunday');

    await sunday.check();

    await expect(sunday).toBeChecked();

    await page.waitForTimeout(2000);
} )


//select all the checkbox and verify that each box is checked
test('select all the checkbox', async ({page})=>{

     await page.goto('https://testautomationpractice.blogspot.com/');
    
     let days :string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    let checkboxes : Locator[] = days.map((e)=>{
       return  page.getByLabel(e);
     })

     console.log(checkboxes.length);

      expect(checkboxes.length).toBe(7);
     
    //check al the box
//    for(let checkbox of checkboxes){
//        await checkbox.check();
//        await expect(checkbox).toBeChecked();
//    }

   //uncheck all the box
//    for(let checkbox of checkboxes){
//        await checkbox.uncheck();
//        await expect(checkbox).not.toBeChecked();
//    }

   //uncheck last 3 elements 
//  for(let checkbox of checkboxes.slice(-3)){ //slice(-3) - it will return the last 3 element in an array 
//        await checkbox.uncheck();
//        await expect(checkbox).not.toBeChecked();
//    }

   //toogle check box 
//    for(let checkbox of checkboxes){ //slice(-3) - it will return the last 3 element in an array 
     
//     if(await checkbox.isChecked()){
//           await checkbox.uncheck();
//         await expect(checkbox).not.toBeChecked();
//     }else{
//      await checkbox.check();
//        await expect(checkbox).toBeChecked();
//     }
//    }


//radom checkbox selection 

// let indexvalue :number[] = [1,3,5];

// for(let i of indexvalue){
//     await checkboxes[i].check();
//     await expect(checkboxes[i]).toBeChecked();
// }


//select single value using label ;

let dayname :string = 'Friday';

for(let day of days){
    if(day.toLocaleLowerCase() === dayname.toLocaleLowerCase()){
        let checkbox:Locator =  page.getByLabel(day);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
}

})