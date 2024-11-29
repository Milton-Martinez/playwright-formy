import { test, expect } from '@playwright/test';
import { SwitchWindowPage } from "../pages/switch-window-page";

test.describe('Switch window page', () => {
  let switchWindowPage:SwitchWindowPage;
  
  test.beforeEach(async ({ page }) => {
    switchWindowPage = new SwitchWindowPage(page);
    await switchWindowPage.open();
  });

  test('Assess - switch window and detect an alert', async({ page }) => {
    //handling the alert to create the expect 
    await page.on('dialog', async dialog => {
      const message =  await dialog.message();
      await dialog.accept();
      await expect(message?.trim()).toBe('This is a test alert!');
    });

    await switchWindowPage.clickOpenNewTabButton();
    await page.waitForTimeout(3000);
    await switchWindowPage.switchWindow();
    await page.waitForTimeout(2000);
    await switchWindowPage.clickAlertButton();
  });
});