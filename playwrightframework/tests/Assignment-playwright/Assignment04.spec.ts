
import{test,expect} from '@playwright/test';

test('Automate frames',async({page})=>{

    test.slow();
  await page.goto('https://demoqa.com/frames');

const mainwindowele= page.locator('h1.text-center');

const frame= page.frameLocator('iframe#frame1');

const framelement=frame.locator('h1#sampleHeading');

console.log("frame window element : "+ framelement.textContent());

console.log("mainframe window element : "+  mainwindowele.textContent());


});