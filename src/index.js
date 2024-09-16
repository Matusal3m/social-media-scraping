import TelegramNavigation from "./classes/TelegramNavigation.js";

(async () => {
  const url = "https://web.telegram.org/a/";

  const telNav = new TelegramNavigation();

  await telNav.start(url);
  await telNav.takeQrCodeScreenshot();
  await telNav.stop();
})();
