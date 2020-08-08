import * as Webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as Path from 'path';
import { Browser, BrowserOptions } from './types'

export const benchmark = async (options: BrowserOptions, tag: string | null, file: string) => {

  const firefoxOptions = new firefox.Options();
  const chromeOptions = new chrome.Options();


  if (options.headless) {
    firefoxOptions.headless();
    chromeOptions.headless();
  }

  let driver = await new Webdriver.Builder()
    .forBrowser(options.browser, 'latest')
    .setChromeOptions(chromeOptions)
    .setFirefoxOptions(firefoxOptions)
    .build();

  // docs for selenium:
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html
  let result = [];
  try {
    await driver.get('file://' + Path.resolve(file));
    await driver.wait(Webdriver.until.titleIs('done'), 480000);
    result = await driver.executeScript('return window.results;');
  } finally {
    await driver.quit();
  }
  return { tag: tag, browser: 'chrome', results: result };
};
