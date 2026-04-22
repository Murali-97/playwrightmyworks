import{Page} from '@playwright/test';
import loginpage from '../page-element/login-page-element.json';
import { webcomons } from '../../common/ui/web-common';
import linkden from '../page-element/linkden-page-elements.json';
import  Config  from '../../config/config.json';


export class loginsteps{

page:Page;
web:webcomons;

constructor(page:Page){
    this.page=page;
    this.web=new webcomons(page);
}

     //Method to launch the application
async launchapplication(){
    await this.web.launchapplication(Config.app.url);
}

 //Method to verify login page is displayed
async verifyloginpagedisplay(){

    await this.web.iselementvisibilty(loginpage.loginpageheader);

}

//Method to enter username and password 
async enterusernameandpassword(username:string,password:string){

    await this.web.entertext(loginpage.bussinessemailtextbox, username);
    await this.web.entertext(loginpage.passwordtextbox, password);
}

//Method to click on the Forgot Password link

async clickforgotpasswordlink(){
await this.web.iselementvisibilty(loginpage.loginbutton);
    await this.web.clickelement(loginpage.loginbutton);
}

    //Method to verify forgot password confirmation message is displayed
    async verifyforgotpasswordmsg(){

        await this.web.iselementvisibilty(loginpage.forgotpasswordconformstionmsg);
    }

  //Method to click on the login button
    async clickLoginButton() {
        await this.web.screenshot('screenshot/login.png')
        await this.web.clickelement(loginpage.loginbutton);
    }

    //Method to verify error message is displayed for invalid login attempt

    async verifyerrormsginvalidlogin(){
        await this.web.iselementvisibilty(loginpage.loginErrorMessage);
    }

      //Method to verify the social media login options within the login page 

      async verifysocialmedialinks(){
        await this.web.iselementvisibilty(loginpage.linkedInIcon);
        await this.web.iselementvisibilty(loginpage.googleIcon);
      }

      
    //Method to click on the sign up link within the login page 

    async clickonsigupbutton(){
        await this.web.clickelement(loginpage.signUpLink);
    }
//method click on socialmedia link navigate to page

async clicklinkden(){

    await this.web.clickelement(loginpage.linkedInIcon);
    await this.web.iselementvisibilty(linkden.linkdinlogo);
}

}

export default loginsteps;