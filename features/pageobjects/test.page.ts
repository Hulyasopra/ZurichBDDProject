import { $ } from "@wdio/globals";
import Page from "./page";

class TestPage extends Page {
  public get clickOnCookies() {
    return $("//button[@id='onetrust-accept-btn-handler']");
  }

  public get teLlamamosBtn() {
    return $("(//*[@class='link-secondary-button'])[2]");
  }

  public get enterName() {
    return $("//*[@id='_ZurichCallmebackEmpresas_name']");
  }

  public get termsAndLegales() {
    return $("//*[@id='_ZurichCallmebackEmpresas_']");
  }

  public get pedirCita() {
    return $("//span[text()='Pedir Cita']");
  }

  public get errorMessage() {
    return $("//*[@id='_ZurichCallmebackEmpresas_phoneHelper']/div");
  }

  public get phoneNo() {
    return $("[name=_ZurichCallmebackEmpresas_phone]");
  }

  public get successMessage() {
    return $(".titleSuccess");
  }

  public async errorMessageText(msg: string) {
    await expect(this.errorMessage).toHaveText(msg);
  }

  public async successMessageText(msg: string) {
    await expect(this.successMessage).toHaveText(msg);
  }

  public async clickOnPedirCitaBtn() {
    (await this.pedirCita).click();
  }

  public async enterUsername(username: string) {
    await (await this.enterName).setValue(username);
  }

  public async enterPhoneNo(phone: string) {
    (await this.phoneNo).setValue(phone);
  }

  public async clickOnTerminosLegales() {
    (await this.termsAndLegales).click();
  }

  public async clickOnTeLlamamosBtn() {
    (await this.teLlamamosBtn).click();
  }

  public async clickOnCookiesPopup() {
    await this.clickOnCookies.click();
  }

  public async setAppointmentTime(time) {
    const path1 = "[name='";
    const path2 = "']";
    await $(path1 + time + path2).click();
  }
  public open() {
    return super.open();
  }
}

export default new TestPage();
