

import { expect, Locator, Page, selectors } from '@playwright/test';

export class webcomons {

    page: Page;
    //Constructor method to provide current browser tab details to perform the actions.
    constructor(page: Page) {
        this.page = page;
    }

    //Common method to generate web element from the locator 

    element(selectors: string) {
        return this.page.locator(selectors);
    }

    //Common method to launch the application and verify the title 

    async launchapplication(url: string,title?: string) {

        await this.page.goto(url);
        if (title) {

            await expect(this.page).toHaveTitle(title);
        }
    }

    //Common method to scroll to the web element

    async scrolltoelement(selector: string) {

        await this.element(selector).scrollIntoViewIfNeeded();
    }

    //Common method to click on the web element 

    async clickelement(selector: string) {

        await this.scrolltoelement(selector);
        await this.element(selector).click();
    }

    //Common method to double click on the web element

    async doubleclick(selector: string) {

        await this.scrolltoelement(selector);
        await this.element(selector).dblclick();
    }

    //Common method to right click on the web element 

    async rightclick(selector: string) {
        await this.scrolltoelement(selector);
        await this.element(selector).click({ button: "right" });

    }

    //Common method to hover on the web element 

    async mousehover(selector: string) {
        await this.scrolltoelement(selector);
        await this.element(selector).hover();
    }

    //Common method to force click on the element

    async forceclick(selector: string) {
        await this.scrolltoelement(selector);
        await this.element(selector).click({ force: true });
    }

    //Common method to click and hold on the web element 
    async holdelement(selector: string) {
        await this.scrolltoelement(selector);

        const elementHandle = await this.element(selector).elementHandle();
        if (elementHandle) {
            await elementHandle.hover();
            await this.page.mouse.down();
        }
    }

    //Common method to release the click on the web element 

    async releaseclickbutton() {
        await this.page.mouse.up();
    }


    //Common method to clear the text entered into the text box 

    async cleartextbox(selector: string) {
        await this.scrolltoelement(selector);
        await this.element(selector).clear();

    }

    //Common method to enter the text into the text box

    async entertext(selector: string, text: string) {

        await this.scrolltoelement(selector);
        await this.element(selector).fill(text);
    }

    //Common method to select the option from the drop-down 

    async dropdown(selector: string, option: string) {
        await this.scrolltoelement(selector);
        await this.element(selector).selectOption(option);
    }

    //Common method to check the checkbox only if it is not already checked

    async checkbox(selector: string) {
        await this.scrolltoelement(selector);
        const checkbox = await this.element(selector).isChecked();
        if (!checkbox) {
            await this.element(selector).check();
        }
    }

    //Common method to uncheck the checkbox only if it is already checked

    async uncheckbox(selector: string) {

        await this.scrolltoelement(selector);
        const checked = await this.element(selector).isChecked();
        if (checked) {
            await this.element(selector).uncheck();
        }
    }

    //Common method to check the radio button 


    async radiobutton(selector: string) {

        await this.scrolltoelement(selector);
        await this.element(selector).check();
    }


    //Common method to extract the text value from the element 

    async gettext(selector: string):Promise<string|void>{
        await this.scrolltoelement(selector);
        await this.element(selector).textContent();

    }

    //Common method to extract the attribute value from the element 

    async attributevalue(selector: string, attributename: string): Promise<string | null> {
        await this.scrolltoelement(selector);
        return await this.element(selector).getAttribute(attributename);
    }

    //Common Method to Upload the File 

    async uploadfile(selector: string, filepath: string) {

        await this.scrolltoelement(selector);
        await this.element(selector).setInputFiles(filepath);
    }

    //Common method to verify the visibility of an element 

    async iselementvisibilty(selector: string) {
       
        await this.element(selector).isVisible();

     //   await expect(this.element(selector)).toBeVisible();
    }

    //Common method to verify the element is enabled or not 

    async iselementenable(selector: string) {
        await expect(this.element(selector)).toBeEnabled();
    }

    //Common method to verify the text value of the element 

    async verifytextvalue(selector: string, expectedtext: string) {
        await expect(this.element(selector)).toHaveText(expectedtext);

    }

    //Common method to verify the attribute value of the element 

    async attributevaluecorrect(selector: string, attribute: string, expectattributevalue: string) {
        await expect(this.element(selector)).toHaveAttribute(attribute, expectattributevalue);
    }


    //Common method to verify the element is not visible 

    async iselementnotvisible(selector: string) {
        await expect(this.element(selector)).toBeHidden();
    }


    //Common method to deal with alerts.

    async handleAlert(action: string) {
        this.page.on("dialog", async (dialog) => {

            console.log("title messge:  "+ dialog.message());
            if (action === "accept") {
                await dialog.accept();
            } else if (action === "dismiss") {
                await dialog.dismiss();
            }
        });
    }

    //common method for screenshot

    async screenshot(path: string) {

        await this.page.screenshot({path});
    }

}


