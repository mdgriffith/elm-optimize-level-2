import * as Webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as safari from 'selenium-webdriver/safari';
import * as Path from 'path';
import { BrowserOptions } from '../types';
import chalk from 'chalk';

export const benchmark = async (
  options: BrowserOptions,
  name: string,
  tag: string | null,
  file: string
) => {
  const firefoxOptions = new firefox.Options();
  const chromeOptions = new chrome.Options();
  const safariOptions = new safari.Options();

  if (options.headless) {
    firefoxOptions.headless();
    chromeOptions.headless();
    // safariOptions.headless();
  }
  // Should probably make this configurable...
  chromeOptions.addArguments('js-flags=--allow-natives-syntax')
  

  let driver = await new Webdriver.Builder()
    .forBrowser(options.browser)
    .setChromeOptions(chromeOptions)
    .setFirefoxOptions(firefoxOptions)
    .setSafariOptions(safariOptions)
    .build();

  // docs for selenium:
  // https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_WebDriver.html
  let result: any = [];
  try {
    const label: string = tag == null ? name : name + ', ' + tag;
    console.log(
      label.padEnd(20, ' ') +
        chalk.green(' -> ') +
        chalk.yellow(options.browser)
    );
    await driver.get('file://' + Path.resolve(file));
    await driver.wait(Webdriver.until.titleIs('done'), 480000);
    result = await driver.executeScript('return window.results;');
  } finally {
    // await driver.quit();
  }
//   console.log(result.v8)
  return { name: name, tag: tag, browser: options.browser, results: result.benchmarks, v8: result.v8 };
};




