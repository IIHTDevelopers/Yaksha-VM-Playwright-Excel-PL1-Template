import { Page, expect, Locator } from "@playwright/test";
import { CommonMethods } from "../tests/commonMethods";
import { PatientSearchHelper } from "../tests/reusableMethod";
import * as XLSX from "xlsx";
import path from "path";
// import * as fs from "fs";

export default class PatientPage {
  readonly page: Page;
  public patient: {
    patientLink: Locator;
    searchBar: Locator;
    patientName: Locator;
    hospitalSearchBar: Locator;
    patientCode: Locator;
  };

  constructor(page: Page) {
    this.page = page;
    this.patient = {
      patientLink: page.locator('a[href="#/Patient"]'),
      searchBar: page.locator("#quickFilterInput"),
      hospitalSearchBar: page.locator("#id_input_search_using_hospital_no"),
      patientName: page.locator(
        "//div[@role='gridcell' and @col-id='ShortName'][1]"
      ),
      patientCode: page.locator(
        "//div[@role='gridcell' and @col-id='PatientCode'][1]"
      ),
    };
  }

  /**
   * @Test11.2 This method performs a patient search in the appointment section using reusable function.
   *
   * @description This function highlights the appointment link, clicks on it to navigate to the appointment page,
   *              waits for the page to load, and triggers the patient search action using a helper function.
   *              It ensures that the patient search is executed successfully and returns true if the search operation is completed.
   * @return boolean - Returns true if the patient search is successful, otherwise false.
   */

  async searchPatientInPatientPage(): Promise<boolean> {
    // write your logic here
    return false;
  }

  /**
   * @Test8 Searches for and verifies patients in the patient list.
   *
   * @description This method navigates to the patient section, iterates over a predefined list of patients, and performs
   *              a search operation for each patient name. After each search, it verifies that the search result matches
   *              the expected patient name. If all patients are verified successfully, it returns true; otherwise, false.
   *
   * @returns {boolean} - Returns true if all patient searches are verified successfully; returns false if an error occurs.
   */

  async searchAndVerifyPatients(patientData: Record<string, string>): Promise<boolean> {
    // write your logic here
    return false;
  }
}
