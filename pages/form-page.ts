import { type Locator, type Page, expect } from "@playwright/test";

export class Form {
    
    //*Variables
    readonly page: Page;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly jobTitleField: Locator;
    readonly levelEducationPicker: Locator;
    readonly genderPicker: Locator;
    readonly yearsExperiencePicker: Locator;
    readonly datePicker: Locator;
    readonly submitButton: Locator;
    readonly submitMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameField = page.locator('#first-name');
        this.lastNameField = page.locator('#last-name');
        this.jobTitleField = page.locator('#job-title');
        this.levelEducationPicker = page.locator('.input-group [type="radio"]');
        this.genderPicker = page.locator('.input-group [type="checkbox"]');
        this.yearsExperiencePicker = page.locator('#select-menu');

        // this.yearsExperienceOptions  = page.locator('#select-menu optio'); -> Deberia tener items q al inicio esta ocultos?

        this.datePicker = page.locator('#datepicker')
        this.submitButton = page.locator('.btn.btn-lg.btn-primary');
        this.submitMessage = page.locator('.alert.alert-success');
    }
    async open(){
        await this.page.goto('https://formy-project.herokuapp.com/form');
    }
    async fillFirstNameField (text='Test'){
        await this.firstNameField.fill(text);
    }
    async fillLastNameField (text='Ipsom'){
        await this.lastNameField.fill(text);
    }
    async fillJobTitleField (text='Im a test case'){
        await this.jobTitleField.fill(text);
    }
    async selectLevelEducation(number = 1){
        await this.levelEducationPicker.nth(number).click();
    }
    async SelectGender(number = 2){
        await this.genderPicker.nth(number).click();
    }
    async selectaYearsExperience(number = 2){
        await this.yearsExperiencePicker.selectOption({ index:number });
        // const yearsExperienceOptions = await this.page.locator('#select-menu option');// $$('#select-menu option')[number];
        // await yearsExperienceOptions.nth(number).click();//algunas veces algunas acciones no funcionan con algunos elementos
        // await yearsExperienceOptions.waitFor({ state:'visible' });
    }
    //date
    async selectDate(day = 30){
        await this.datePicker.click();
        await this.page.click(`//td[@class='day'][text()='${day}']`);
        await this.page.waitForTimeout( 3000 );
    }
    async clickSubmitForm(){
        await this.submitButton.click();
    }
    async getSubmitMessage(){
        return await this.submitMessage.textContent();
    }
}