
import { test, expect, TestInfo } from '@playwright/test';
import loginsteps from '../../page-model/page-steps/login-page-steps';
import cookiespagesteps from '../../page-model/page-steps/cookies-page-steps';
import homepagesteps from '../../page-model/page-steps/home-page-steps';
import data from '../../testdata/ui/data.json';

let loginpage: loginsteps;
let homepage: homepagesteps;
let cookiespage: cookiespagesteps;
let testdata:any;

test.describe('application tests', () => {

    test.beforeEach(async ({ page }) => {

        loginpage = new loginsteps(page);
        homepage = new homepagesteps(page);
        cookiespage = new cookiespagesteps(page);
    });

    test('1 verify cookiepopip launch', async () => {
        test.slow();
        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();

    });

    test('2 verify cookies content',async({}, testInfo: TestInfo)=>{
        test.slow();
     testdata = data[testInfo.title as keyof typeof data];
        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();
        await cookiespage.verifycookiescontent(testdata["expectedContent"]);

    });

    test('3 verify cookies popup logos',async()=>{

        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();
        await cookiespage.verifycookiespopuplogo(); 
    });

    test('4 verify cookies popup selection ',async()=>{

        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();
        await cookiespage.verifypopupselectionpopup();
    });

    test('5 verify cookies page switch button', async()=>{

        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();
        await cookiespage.verifyshowdetailscookiespopup();

    });

    test('6 verify show details feature cookies popup', async()=>{

        await loginpage.launchapplication();
        await cookiespage.verifycookiespagedisplay();
        await cookiespage.verifyshowdetailscookiespopup();
        await cookiespage.clickshowdetailslink();
        await cookiespage.verifyexpandcookies();
    });

test('7 verify cookies and closed successfully', async()=>{

    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
    await cookiespage.verifyshowdetailscookiespopup(); 
    await cookiespage.verifyexpandcookies();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();

    
});

test('8 verify user login valid credentials',async({}, testinfo:TestInfo)=>{
    test.slow();
  testdata=data[testinfo.title as keyof typeof data];
    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
     await cookiespage.verifyshowdetailscookiespopup(); 
    await cookiespage.verifyexpandcookies();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();
    await loginpage.enterusernameandpassword(testdata["username"], testdata["password"]);
    await loginpage.clickLoginButton();
    await homepage.verifyHomePageIsDisplayed();
});

test.only('9 verify error msg invalid credential', async({},testinfo:TestInfo)=>{
    test.slow();
testdata=data[testinfo.title as keyof typeof data];
    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
    await cookiespage.verifyshowdetailscookiespopup();
    await cookiespage.verifyexpandcookies();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();
    await loginpage.enterusernameandpassword(testdata["username"],testdata["password"]);
    await loginpage.clickLoginButton();
    await loginpage.verifyerrormsginvalidlogin();

});

test('10 verify forgot password link ',async()=>{

    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
    await cookiespage.verifyshowdetailscookiespopup();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();
    await loginpage.clickforgotpasswordlink();
    await loginpage.verifyforgotpasswordmsg();
});

 test('11 verify social media links',async()=>{

    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();
    await loginpage.verifyloginpagedisplay();
    await loginpage.verifysocialmedialinks();
 });

 test('12 verify logout functionality',async({},testinfo:TestInfo)=>{
test.slow();
 testdata= data[testinfo.title as keyof typeof data];
    await loginpage.launchapplication();
    await cookiespage.verifycookiespagedisplay();
    await cookiespage.clickcookiesselection('allow all');
    await cookiespage.verifycookiespopupclose();
    await loginpage.enterusernameandpassword(testdata["username"],testdata["password"]);
    await loginpage.clickLoginButton();
    await homepage.verifyHomePageIsDisplayed();
    await homepage.clickProfileIcon();
    await homepage.clickLogoutButton();
    

 })

 test('13 handlealert necessary toggle click',async()=>{

await loginpage.launchapplication();
await cookiespage.verifycookiespagedisplay();
await cookiespage.handlealert();

 })
test('14 check socialmedia link',async()=>{
    test.slow();
  await loginpage.launchapplication();
  await cookiespage.verifycookiespagedisplay();
  await cookiespage.clickcookiesselection("allow all");
    await loginpage.clicklinkden();
})

})