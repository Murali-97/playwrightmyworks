
import { expect, Page } from "@playwright/test";
import cookiespage from '../page-element/cookies-page-elements.json';
import { webcomons } from "../../common/ui/web-common";
import  Config from '../../config/config.json';

export class cookiespagesteps {
    page: Page;
    web: webcomons;
    constructor(page: Page) {
        this.page = page;
        this.web = new webcomons(page);
    }


    //Method to verify Cookies page is displayed.

    async verifycookiespagedisplay() {
        await this.web.iselementvisibilty(cookiespage.headercookies);

    }

    //Method to verify the content of the cookies page


    async verifycookiescontent(expectedcontent: string) {
        await this.web.iselementvisibilty(cookiespage.cookiescontent)
        await expect(this.page.locator(cookiespage.cookiescontent)).toHaveText(expectedcontent);
    }



    // Method to verify the logos on the cookies pop-up

    async verifycookiespopuplogo() {
        await this.web.iselementvisibilty(cookiespage.creatologo);
        await this.web.iselementvisibilty(cookiespage.cookiebotlogo);
    }


    //Method to verify all the selection buttons in the cookies pop-up 

    async verifypopupselectionpopup() {
        await this.web.iselementvisibilty(cookiespage.neccesaryswitchbutton);
        await this.web.iselementvisibilty(cookiespage.preferencesitchbutton);
        await this.web.iselementvisibilty(cookiespage.Statisticsswitchbutton);
        await this.web.iselementvisibilty(cookiespage.markitingswitchbutton);
    }

    //Method to verify Show details link in the cookies pop-up 
    async verifyshowdetailscookiespopup() {
        await this.web.iselementvisibilty(cookiespage.showdetailslink);

    }

    //Method to click on the show details link within the cookies pop-up.

    async clickshowdetailslink() {
        await this.web.clickelement(cookiespage.showdetailslink);
    }

    //Method to verify expanded view of the cookies pop-up after clicking on the show details link. 

    async verifyexpandcookies() {
        await this.web.iselementvisibilty(cookiespage.cookiespopupdisplay);
    }

    //Method to click on the cookies selection buttons.

    async clickcookiesselection(button:string){
    switch(button){
    case "allow all": await this.web.clickelement(cookiespage.allowallbutton);
    break;
     
    case "allow selection": await this.web.clickelement(cookiespage.allowselectionbutton);
    break;

    case "deny" :await this.web.clickelement(cookiespage.denybutton);
    break;

    default:
        throw new Error (`invalid buttonname: ${button}`);

   }

    }


    //Method to Verify Cookies Pop-up is Closed Successfully 

    async verifycookiespopupclose(){

        await this.web.iselementnotvisible(cookiespage.cookiespopupdisplay);

    }

    //method to heandle alert necessary button change

    async handlealert (){
        await this.web.handleAlert(Config.app.action);
        await this.web.forceclick(cookiespage.necessarystwitchbuttontoggle)
        
    
    }
    
}

export default cookiespagesteps;
//helooo