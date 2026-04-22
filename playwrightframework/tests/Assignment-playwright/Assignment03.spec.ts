

import{test,expect} from '@playwright/test';

test('Alert handling', async({page})=>{
test.slow();
await page.locator('https://demoqa.com/alerts');

const information=await page.locator('button#alertButton');
const conformation=await page.locator('button#confirmButton')
const promtalert =await page.locator('button#promtButton');

page.once('dialog', async dialog=>{

console.log('info alert message is: '+ await dialog.message());

await dialog.accept();
    
});

await information.click();

await page.waitForTimeout(2000);

page.once('dialog' ,async dialog=>{

    console.log('Info alert message: '+ dialog.message());

    await dialog.dismiss();


});

await conformation.click();

await page.waitForTimeout(2000);

page.once('dialog' , async dialog=>{

console.log('info alert message: '+ dialog.message());

await dialog.accept('accept the alert message ');
});

await promtalert.click();

await page.waitForTimeout(2000);

});