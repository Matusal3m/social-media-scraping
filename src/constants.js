import path from "path";
import { fileURLToPath } from "url";

/**
 * @type {import("puppeteer").PuppeteerLaunchOptions}
 */

const DEFAULT_BROWSER_OPTIONS = {
  browser: "chrome",
  timeout: 10_000,
  dumpio: true,
};

const errors = {
  COULD_NOT_FIND_TELEGRAM_QR_CONTAINER: Error(
    "COULD_NOT_FIND_TELEGRAM_QR_CONTAINER"
  ),
};

const SCREENSHOT_DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "screenshots");

export { DEFAULT_BROWSER_OPTIONS, errors, SCREENSHOT_DIR };
