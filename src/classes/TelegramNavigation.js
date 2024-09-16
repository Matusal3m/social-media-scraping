import Navigation from "./Navigation.js";
import { errors } from "../constants.js";
import Screenshot from "./Screenshot.js";

export default class TelegramNavigation extends Navigation {
  async #getQrCodeSvg(selector = "div[class=qr-container]>svg") {
    const page = super.currentPage;

    const qrCodeSvg = await page.waitForSelector(selector, {
      visible: true,
    });

    if (!qrCodeSvg) {
      throw errors.COULD_NOT_FIND_TELEGRAM_QR_CONTAINER;
    }

    return qrCodeSvg;
  }

  async takeQrCodeScreenshot() {
    const qrCodeSvg = await this.#getQrCodeSvg();
    const fileName = await Screenshot.takeFromElement(qrCodeSvg, {
      initialFileName: "qr-code",
    });

    console.log(`Screenshot saved as ${fileName}!`);
  }
}
