

import{test,expect,chromium} from '@playwright/test';

test('brower Actions' , async()=>{

//launch the browser engine(chrome engine)
const browserEngine= await  chromium.launch({channel:'chrome', headless:false}); //maedge

//launch the browser context or incognito window from the browser engine
    const browsercontext = await browserEngine.newContext();

// clear all the cookies
    await browsercontext.clearCookies();

//launch the new page or tab with in broser context 
     const page= await browsercontext.newPage();

// maximize the browser window or specific resolution (1920,1080)
    await page.setViewportSize({width:1920, height:1080});

//enter url launch the google application
     page.goto("https://google.com");

//verify application launch by using title of the application

   const title=  await expect(page).toHaveTitle("Google");
   console.log(title);

//launch the new application with in the same tab or page
 await page.goto("https://playwright.dev");

//GO back to the previous gooogle application
await page.goBack();

//move forward to the playwright application
await page.goForward();

//refresh the current application
await page.reload(); 

//launch the new tab with in same browser
const newapge = await browsercontext.newPage();

//launch the new apllication with the url 
await newapge.goto("https://selenium.dev");

//go back to the prevous application available in the previous tab
await page.bringToFront();

//get the current url
const url=await page.url();
console.log(url);

//close the current page
await page.close();

//close all pages or tabs.
await browserEngine.close();

});