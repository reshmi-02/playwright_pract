import {test,expect, Locator} from '@playwright/test'

test('verify chrome cpu load',async ({page})=>{

    await page.goto('https://practice.expandtesting.com/dynamic-table');


    let tablebody : Locator = page.locator('table.table-striped tbody');
   
    //print the row count 

   let tablebodyrows : Locator[] =await tablebody.locator('tr').all();
   expect(tablebodyrows.length).toEqual(4);

   //get the cpu value for chrome
  
   let cpuload = "";

   for(let row of tablebodyrows){

   let name :string=  await row.locator('td').nth(0).innerText();
   if(name=="Chrome"){
   cpuload= await row.locator('td:has-text("%")').innerText();
   console.log("cpu load for chrome : ",cpuload);
   break;
   
   }

   }


   //comparing the cpu load with the result 

    let result  = await page.locator('#chrome-cpu').innerText();

    if(result.includes(cpuload)){
        console.log("value match");
        
    }
    else{
        console.log("values do not match");
        
    }



    expect(result).toContain(cpuload);
})


