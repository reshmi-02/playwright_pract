import {test,expect} from '@playwright/test'

test('frame demo',async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/');


   let frames  = page.frames()
   console.log(frames.length);


   //frame handling approach 1
//   let frame1= page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
// approach1:   await frame1?.locator("input[name='mytext1']").fill('Reshmi'); or

//approach2
//    if(frame1){
//     await frame1.locator("input[name='mytext1']").fill('Reshmi');
//     //or
//     await frame1.fill("input[name='mytext1']","Reshmi");
//    }
//    else{
//     console.log("frmae not found");
    
//    }


//frame handling approach2
await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']").fill('Reshmi')
})