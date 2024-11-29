import { type Locator, type Page, expect } from "@playwright/test";

export class SwitchWindowPage {

    readonly page: Page;
    readonly newTabButton: Locator;
    readonly alertButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTabButton = page.locator('#new-tab-button');
        this.alertButton = page.locator('#alert-button');
    }
    async open(){
        await this.page.goto('https://formy-project.herokuapp.com/switch-window');
    }

    async clickOpenNewTabButton(){
        await this.newTabButton.click();
    }
    async switchWindow(tab = 'https://formy-project.herokuapp.com/switch-window'){
        await this.page.goto(tab);
        await this.page.bringToFront();
    }
        
    async clickAlertButton(){
        await this.alertButton.click({ force:true });

        //leave these comments to show all my attempts :'(

        // await this.page.evaluate(() => window.confirm = function(){return true;});
        // await this.page.locator('#alert-button').click();
        // await this.page.waitForSelector("sl-alert")
        // await this.page.evaluate( () => {
        //         alert("This is a test alert!");
        // } )
        // let message:string='';
        // await this.page.on('dialog', async dialog => {
        //     message =  await dialog.message();
        // })
        // return message;
        
    }

}