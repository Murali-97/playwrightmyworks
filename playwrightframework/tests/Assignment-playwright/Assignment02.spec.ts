

import{test,expect} from '@playwright/test';

test('Automate web forms',async({page})=>{

//1. Enter URL and Launch the application (https://demoqa.com/automation-practice-form) 

await page.goto('https://demoqa.com/automation-practice-form');

//2. Wait for Page-load

const header= page.locator('//h1[text()="Practice Form"]');
await expect(header).toBeVisible();

//3. Enter First name and Last name 

const firstname= await page.locator('input#firstName');
await firstname.fill("murali");

const lastname= await page.locator('input#lastName');
await lastname.fill("krishna");

//4. Enter Email 

const email= await page.locator('input#userEmail');
await email.fill("murali@gmail.com");

//5. Select Gender (Male) 
await gender(page,'Male');

//6. Enter mobile number  
const mobileno= await page.locator('input#userNumber');
await mobileno.fill("1234567891");

//7.Select DOB (1-Feb-1991)
 await selectDob(page,'February','1991','1');

//8.Search and Select Computer Science  and English
let subjects:string[]=["Computer Science","English"];
await searchmulti(page,subjects);

//9.Select Hobbies as Sports and Reading 

let hobbies:string[]=["Sports","Reading"];
await selecthoobiess(page,hobbies);


//10.Upload photo 
const uploadfile= await page.locator('input#uploadPicture');
const filepath= "files/pictures.png";
await uploadfile.setInputFiles(filepath);

//11.Submit Details 
const submitBtn = page.locator('button#submit');     
await submitBtn.click();   

await page.screenshot({path:'screenshot/form-submission.png',fullPage:true });

});




async function gender(page:any,option:string) {

  const gen=  await page.locator(`input[value="${option}"]`);
   await gen.click();
}

async function selectDob(page:any, month:string, year:string ,date:string) {

    //launch the calendar
    const Dob= await page.locator('input#dateOfBirthInput');
await Dob.click();

//select month value

const monthdrp=await page.locator('select.react-datepicker__month-select');
await monthdrp.selectOption({label:month});

//select year value

const yeardrp= await page.locator('select.react-datepicker__year-select');
await yeardrp.selectOption({label:year});

 //select the date 

 const dateEle = page.locator(`//div[text()="${date}" and contains(@aria-label, "${month}")]`);
    await dateEle.click();


}

async function searchmulti(page:any, subjects:string[]) {
    
    const subjectinputs =await page.locator('div[class*="subjects-auto-complete__input-container"]');
    await subjectinputs.click();

    for(let subject of subjects){

        const subjectinput= await page.locator('input#subjectsInput');
        await subjectinput.fill(subject);
        await subjectinput.press('Enter');
    }
}


async function selecthoobiess(page:any, hobbies:string[]) {

    for(let hobbie of hobbies){
   const hobbiele =  page.locator(`//label[text()="${hobbie}"]`);
    
   //select the hobby if not selected already
   if(!await hobbiele.isChecked()){
       await hobbiele.check();
   }

}
}
