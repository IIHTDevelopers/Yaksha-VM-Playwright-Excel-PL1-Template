// src/common/CommonMethods.ts

import { Locator } from "playwright";
import * as XLSX from "xlsx";

export class CommonMethods {
  // Method to highlight an element
  static async highlightElement(element: Locator) {
    await element.evaluate((el: HTMLElement) => {
      el.style.border = "2px solid yellow"; // Highlight with yellow border
      el.style.backgroundColor = "yellow"; // Highlight with yellow background
    });

    // Optional: Keep the highlight for a short duration, then remove
    await element.evaluate((el: HTMLElement) => {
      setTimeout(() => {
        el.style.border = "";
        el.style.backgroundColor = "";
      }, 1000); // Keeps highlight for 1 seconds
    });
  }

  static async readExcel(filePath: string, sheetName: string): Promise<Record<string, string>> {
    const dataMap: Record<string, string> = {};
    // write your logic here to read excel and return the data in Record<string, string>
    return dataMap;
  }
}
