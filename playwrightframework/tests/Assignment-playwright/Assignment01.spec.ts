// <!-- 1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
// 2.verify application logo is displayed
// 3.Verify application caption displayed as "Experience the difference"
// 4.Enter invalid username
// 5.Enter empty Password
// 6.Click on login button
// 7.Verify the error message "Please enter a username and password."
// 8.Click on admin page link
// 9.select the option "soap" from dba mode radio button
// 10.Scroll to element dropdown
// 11.Select the option web service from the dropdown
// 12.click on submit button
// 13.verify submission is successful by validating success message
// 14.Click on services page link
// 15.wait for service page
// 16.Scroll down till bookstore services table
// 17.get total rows of books store services table
// 18.get total columns of books store services table
// 19.Print table data (row wise and column wise data) -->



import{test,expect} from '@playwright/test';

test.describe('group of test cases', async()=>{

    //1. Launch application using url (https://parabank.parasoft.com/parabank/index.htm)
    test('launch the applicaion', async({page})=>{

      await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    });

    test('verfy the logo', async({page})=>{
    // 2.verify application logo is displayed
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        let logo=page.locator('img.logo');
        await expect(logo).toBeVisible();
    })


    test('verify caption', async({page})=>{
    
   //  3.Verify application caption displayed as "Experience the difference
        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        let logo=page.locator('img.logo');
        await expect(logo).toBeVisible();
        const caption=page.locator('//p[text()="Experience the difference"]');
        await expect(caption).toHaveText('Experience the difference');
    })


      test('Enter invalid username', async({page})=>{
    
       // 4.Enter invalid usernamess
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
     
      
    })

  test('Enter empty Password ', async({page})=>{
    
       // 5.Enter empty Password
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill('');  

    })

      test('Click on login button ', async({page})=>{
    
       // 6.Click on login button
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill(''); 
        await page.locator('input[type="submit"]').click(); 
            
    })

    test('Click on admin page link ', async({page})=>{

       // 8.Click on admin page link
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill(''); 
        await page.locator('input[type="submit"]').click();
        await expect(await page.locator('//p[text()="Please enter a username and password."]')).toHaveText('Please enter a username and password.');
        await page.locator('//a[text()="Admin Page"]').click();
    })

   
  test('select radio button', async({page})=>{

        // 9.select the option "soap" from dba mode radio button
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill(''); 
        await page.locator('input[type="submit"]').click();
        await expect(await page.locator('//p[text()="Please enter a username and password."]')).toHaveText('Please enter a username and password.');
        await page.locator('//a[text()="Admin Page"]').click();
        await page.locator('input#accessMode1').click();
    })

      
  test('scroll to element', async({page})=>{

        // 10.Scroll to element dropdown
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill(''); 
        await page.locator('input[type="submit"]').click();
        await expect(await page.locator('//p[text()="Please enter a username and password."]')).toHaveText('Please enter a username and password.');
        await page.locator('//a[text()="Admin Page"]').click();
        await page.locator('input#accessMode1').click();
        await page.locator('select#loanProvider').scrollIntoViewIfNeeded();

    })


    test('select option dropdown', async({page})=>{

            // 11.Select the option web service from the dropdown
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         let logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
         const caption=page.locator('//p[text()="Experience the difference"]');
         await expect(caption).toHaveText('Experience the difference');
         await page.locator('input[name="username"]').fill('murali');
        await page.locator('input[name="password"]').fill(''); 
        await page.locator('input[type="submit"]').click();
        await expect(await page.locator('//p[text()="Please enter a username and password."]')).toHaveText('Please enter a username and password.');
        await page.locator('//a[text()="Admin Page"]').click();
        await page.locator('input#accessMode1').click();
       let dropdown= await page.locator('select#loanProvider');
       await dropdown.scrollIntoViewIfNeeded();
        await dropdown.click();
        await dropdown.selectOption({label:'Web Service'});

    })

    

    test.only('//click on submit button', async({page})=>{

     // 12.click on submit button
         await page.goto('https://parabank.parasoft.com/parabank/index.htm');
         const logo=page.locator('img.logo');
         await expect(logo).toBeVisible();
console.log("Logo is displayed successfully. ");

         const caption=page.locator('//p[text()="Experience the difference"]');
         console.log(caption);
         const expectedCaption = "Experience the difference";
         const actualCaption = await caption.textContent();
         await expect(actualCaption).toBe(expectedCaption);
 console.log("Caption is displayed successfully. ");

        const username= await page.locator('input[name="username"]');
        await username.fill("murali");
 console.log("Username is entered successfully. ");

       const passwrd=  await page.locator('input[name="password"]');
        await passwrd.fill(''); 
 console.log("Password is entered successfully. ");

        await page.locator('input[type="submit"]').click();
 console.log("Login button is clicked successfully. ");

        await expect(await page.locator('//p[text()="Please enter a username and password."]')).toHaveText('Please enter a username and password.');
 console.log("Error message is displayed successfully. ");

        await page.locator('//a[text()="Admin Page"]').click();
 console.log("Admin page link is clicked successfully. ");
 
        await selectdbaradio(page,'soap');
  console.log("Option soap is selected successfully. ");

       let dropdown= await page.locator('select#loanProvider');
       await dropdown.scrollIntoViewIfNeeded();
        await dropdown.click();
    console.log("Scrolled to loan provider dropdown successfully. ");

        await dropdown.selectOption({label:'Web Service'});
        await page.locator('//input[@value="Submit"]').click();

       // 13.verify submission is successful by validating success message

       const successmessage=page.locator('//b[text()="Settings saved successfully."]');
       await expect(successmessage).toBeVisible();
  console.log("Success message displayed successfully");

        // 14.Click on services page link
        const servicesPage = page.locator('ul[class="leftmenu"] >li >a[href*="services"]');
        await servicesPage.click();
  console.log("Services page link is clicked successfully. ");
      
// 15.wait for service page
   const bookstoreservices = await page.locator('//span[text()="Bookstore services:"]');
 await expect(bookstoreservices).toBeVisible();
 console.log("Services page  is displayed successfully.");

// 16.Scroll down till bookstore services table
bookstoreservices.scrollIntoViewIfNeeded();

// 17.get total rows of books store services table
const rows = page.locator('//span[text()="Bookstore services:"] /following-sibling::table[1]/tbody/tr');
 const rowscount= await rows.count();
console.log("Total rows displayed in the table are : " + rowscount);

// 18.get total columns of books store services table

const columns = page.locator('//span[text()="Bookstore services:"] /following-sibling::table[1]/tbody/tr[1]/td');
 const columcount= await columns.count();
console.log("Total columns displayed in the table are : " + columcount);

// 19.Print table data (row wise and column wise data) -->

    for(let r:number=1; r<=rowscount; r++){
        for(let c:number=1;c<=columcount; c++){

        const cell= page.locator(`//span[text()="Bookstore services:"] /following-sibling::table[1]/tbody/tr[${r}]/td[${c}]`);
         const cellvalue= await cell.textContent();
          console.log(`Row ${r} Column ${c} value is : `+cellvalue);
        }
    }

    })

});

async function selectdbaradio(page:any , option:string) {

  const dbamode = await page.locator(`input[value="${option}"]`);
  await dbamode.click();
  
}


