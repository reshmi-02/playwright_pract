import {test,expect} from '@playwright/test';

test('autowaiting', async ({page})=>{

    //autowaiting : it perform some default validation before performing a event 
    await page.goto('https://demowebshop.tricentis.com/');

    //if we want to execute the test in slow we use this , it will wait the 
    //3 times of the default waiting time 
    // test.slow();

     //default wait time for all element is 30 s
   //default asser wait time is 5s 
//    test.setTimeout(60000);  //this test only wait for 60 for all element 

   //if we want a set a extra waiting time for assert do this 
   await expect(page).toHaveURL('https://demowebshop.tricentis.com/',{timeout:10000});



//    await  page.locator('input#small-searchterms').fill('laptop');
//if we did not want a autowaiting validatio do this 
   await  page.locator('input#small-searchterms').fill('laptop',{force:true});

   await page.locator('input.search-box-button').click();

  

})