import { Page } from "@playwright/test";
import homepage from '../page-element/home-page-element.json';
import { webcomons } from "../../common/ui/web-common";


export class homepagesteps{

    page:Page;
    web:webcomons;

    constructor(page:Page)
    {
        this.page=page;
        this.web=new webcomons(page);

    }

       //Method to verify home page is displayed
    async verifyHomePageIsDisplayed() {
        await this.web.iselementvisibilty(homepage.homePageHeaderLink);
    }

    //Method to click on the profile icon 
    async clickProfileIcon() {
        await this.web.clickelement(homepage.profile);
    }

    //Method to click on the logout button
    async clickLogoutButton() {
        await this.web.clickelement(homepage.logoutLink);
    }    
}

export default homepagesteps;