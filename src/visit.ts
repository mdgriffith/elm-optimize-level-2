import * as Webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as Path from 'path';

export const benchmark = async (tag: string | null, file: string) => {
  let driver = new Webdriver.Builder()
    .forBrowser('chrome')
    // .setChromeOptions(/* ... */)
    // .setFirefoxOptions(/* ... */)
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
