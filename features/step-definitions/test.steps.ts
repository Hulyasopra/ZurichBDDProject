import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import TestPage from '../pageobjects/test.page';

const pages = {
    test: TestPage
    
}

Given(`User navigates to Zurich Application url`,async () => {
  
  await pages.test.open()
  await browser.maximizeWindow()
 });
 
 Given(`Clicks on {string} button`, async(arg0: string) => {
   await pages.test.clickOnCookiesPopup()
     await browser.pause(2000)
 });
 
 Given(`clicks on {string} button`, async(arg0: string) => {
    await pages.test.clickOnTeLlamamosBtn();
    await browser.pause(2000)
});


When(`User enters {string} and checks {string} checkbox`, async(username,arg0: string) => {

  await pages.test.enterUsername(username);
  await pages.test.clickOnTerminosLegales();
   await browser.pause(2000)
});

When(`user clicks on Pedir Cita submit button`,async() => {
   await pages.test.clickOnPedirCitaBtn()
    await browser.pause(2000)
});



Then(`User verifies {string} error message`,async (message) => {
  await pages.test.errorMessageText(message);
  await browser.pause(2000)
    
});

When(`User enters Nombre {string} and Telefono de contacto  {string}`,async (username, telNo) => {
   // (await $("//*[@id='_ZurichCallmebackEmpresas_name']")).setValue(username);
    //await $("[name=_ZurichCallmebackEmpresas_phone]").setValue(telNo);
    await pages.test.enterUsername(username);
    await pages.test.enterPhoneNo(telNo);
    await browser.pause(2000)
});

When(`User selects time as {string}`,async (time) => {
    await $("[name='17']").click()
});

Then(`User checks {string} checkbox`,async(arg0: string) =>{
  await pages.test.clickOnTerminosLegales();
 
});



Then(`User verifies {string} success message`, async(message) => {
  await pages.test.successMessageText(message)
  await browser.pause(2000)
});