import {test,expect, Locator} from '@playwright/test'

test('pagination table',async ({page})=>{

    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');


    let tablebodyrow : Locator[] = await page.locator('#example tbody tr').all();

    //print the cuurent page table body content
    for(let row of tablebodyrow){

        console.log(await row.innerText());
        ;

    }


    //printing all the page table content

    let hasNextPage = true ;

   while(hasNextPage){
     let tablebodyrow : Locator[] = await page.locator('#example tbody tr').all();

    for(let row of tablebodyrow){

        console.log(await row.innerText());
        ;

    }

    let nextbutton : Locator = page.locator('button[aria-label="Next"]');
    let disabledButton =await nextbutton.getAttribute('class');

     if (disabledButton?.includes("disabled")) {
      break;
    }

    await nextbutton.click();

    // wait until table is refreshed
    await page.waitForTimeout(1000);

   }

   

    
})



test('pagination entries slection',async ({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

//pagination entries selection 

   let entries : Locator = page.locator('select[aria-controls="example"]');
  await entries.selectOption({label:'25'});

  await expect(page.locator('#example tbody tr')).toHaveCount(25);

})


test.only('pagination search box',async ({page})=>{
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');

//pagination search box 
    let search :Locator = page.locator('#dt-search-0');
    await search.fill('Paul Byrd');

    let tablerows : Locator[] = await page.locator('#example tbody tr').all();


    if(tablerows.length>0){

        let matchfound=false;

        for(let row of tablerows){

           let text : string =await row.innerText();
           if(text.includes('Paul Byrd')){
            matchfound=true;
            console.log("match found");
            break;
            
           }
        }

         expect(matchfound).toBeTruthy();
    }
    else{
        console.log('no matching records found');
        
    }
})