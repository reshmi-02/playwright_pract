import {test,expect, Locator} from '@playwright/test';


test('static web table' , async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

   let tablebody :Locator =  page.locator("table[name='BookTable'] tbody");

   //count the number of rows 
   
  let tableRows :Locator =  tablebody.locator("tr");
  await expect(tableRows).toHaveCount(7)
  //or
   expect(await tableRows.count()).toBe(7);


   //count the number of headers 
   let tableheader:Locator= tableRows.locator('th');
    expect(await tableheader.count()).toBe(4)

    //print all the data in the 3rd row 
    let thirdRow : Locator = tableRows.nth(2).locator('td');
    console.log(await thirdRow.allTextContents());

    //get all row data 

    let allrowlocator :Locator[] = await tableRows.all();
    console.log(allrowlocator);
    console.log(await allrowlocator[0].locator('th').allInnerTexts());; //used to print the header 
    
    for(let row of allrowlocator.slice(1)){ //slice (1) skip the first row 
       
      let col =await row.locator('td').allInnerTexts();
       console.log(col.join('\t'));
       
    }

    //print the books where author name is mukesh 
    for(let row of allrowlocator.slice(1)){

      let authorname : string =   await row.locator('td').nth(1).innerText();
      let bookname : string = await row.locator('td').nth(0).innerText();

      if(authorname=="Mukesh"){
        console.log(bookname);
        console.log(`${bookname} is written by ${authorname} `);
        
        
      }

    }


    //total price of all books 

    let totalprice :number = 0;

    for(let row of allrowlocator.slice(1)){

       let total : number=parseInt(await row.locator('td').nth(3).innerText());
        totalprice+=total;
    }

    console.log("total price : ",totalprice);
    
    
})