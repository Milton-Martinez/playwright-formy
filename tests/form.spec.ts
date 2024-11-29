import { test, expect } from '@playwright/test';
import { Form } from "../pages/form-page";

test.describe('Form Page', () => {
  let form:Form;
  
  test.beforeEach(async ({ page }) => {
    form = new Form(page);
    await form.open();
  });
  
  test('Assess completed form message', async ({ page }) => {
    await form.fillFirstNameField();
    await form.fillLastNameField();
    await form.fillJobTitleField();
    await form.selectLevelEducation();
    await form.SelectGender();
    await form.selectaYearsExperience();
    await form.selectDate();
    await form.clickSubmitForm();
    await page.waitForTimeout(3000);
    const submitMessage = await form.getSubmitMessage();
    await expect(submitMessage?.trim()).toEqual('The form was successfully submitted!');

  });
});
