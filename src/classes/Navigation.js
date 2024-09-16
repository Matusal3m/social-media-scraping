import puppeteer, { Browser, Page } from "puppeteer";
import { DEFAULT_BROWSER_OPTIONS } from "../constants.js";

export default class Navigation {

  /**
   * @type {Page}
   */
  _currentPage;

  /**
   * @type {Browser}
   */
  #browser;

  async start(url, options = DEFAULT_BROWSER_OPTIONS) {
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();

    this._currentPage = page;
    this.#browser = browser;

    await page.goto(url);
    console.log(`Navigated to ${url} successfully!`);
  }

  async stop() {
    await this.#browser.close();
  }

  async getContentFromCurrentPage() {
    const page = this._currentPage;
    const content = await page.content();

    return content;
  }

  get currentPage() {
    return this._currentPage;
  }
}
