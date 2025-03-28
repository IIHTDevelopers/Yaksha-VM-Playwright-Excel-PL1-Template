import { Page, Locator } from "playwright";
import { CommonMethods } from "../tests/commonMethods";
import { expect } from "playwright/test";

export default class LaboratoryPage {
  private page: Page;
  private laboratoryLink: Locator;
  private laboratoryDashboard: Locator;
  private settingsSubModule: Locator;
  private addNewLabTest: Locator;
  private addButton: Locator;
  private closeButton: Locator;
  private starIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.laboratoryLink = page.locator('');
    this.laboratoryDashboard = page.locator('');
    this.settingsSubModule = page.locator('');
    this.addNewLabTest = page.locator(
      ''
    );
    this.addButton = page.locator('');
    this.closeButton = page.locator('');
    this.starIcon = page.locator('');
  }

  public get getErrorMessageLocator() {
    return (errorMessage: string) => {
      return this.page.locator(
        ``
      );
    };
  }

  /**
   * @Test6 This method verifies the error message when attempting to add a new lab test without entering required values.
   *
   * @description Navigates to Laboratory > Settings, selects "Add New Lab Test," and clicks the Add button without
   *              providing any input. Captures and returns the displayed error message. If the modal fails to close,
   *              an error is thrown to indicate failure.
   *
   * @return string - The error message text, trimmed of any whitespace.
   */
  async verifyErrorMessage(): Promise<string> {
    // write your logic here
    return "";
  }

  /**
   * @Test15 This method verifies the tooltip text of the star icon in the laboratory dashboard.
   *
   * @description This function navigates to the laboratory page and dashboard, hovers over the star icon, and
   *              waits for the tooltip to appear. It verifies the visibility of the star icon and retrieves the tooltip
   *              text by accessing the 'title' attribute. If an error occurs during the process, it logs the error and throws
   *              an exception. The tooltip text is returned after trimming any extra spaces.
   * @return string - Returns the tooltip text of the star icon, or an empty string if no tooltip is found.
   */

  async verifyStarTooltip(): Promise<string> {
    // write your logic here
    return "";
  }
}
