import { SCREENSHOT_DIR } from "../constants.js";
import { writeFile } from "fs/promises";

export default class Screenshot {
  static #loadDelay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  static async takeFromElement(
    element,
    { path = SCREENSHOT_DIR, delay = 1_000, initialFileName = "screenshot" }
  ) {
    await this.#loadDelay(delay);

    const screenshotBytes = await element.screenshot();
    const fileName = this.#generateFileName(initialFileName);

    await this.#createPngFromBytes(screenshotBytes, fileName, path);

    return fileName;
  }

  static async #createPngFromBytes(
    Uint8Array,
    fileName,
    path = SCREENSHOT_DIR
  ) {
    await writeFile(`${path}/${fileName}.png`, Uint8Array);
  }

  static #generateFileName(initialFileName) {
    const date = new Date();
    return `${initialFileName}-${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}-${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
  }
}
