import * as Webdriver from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import * as firefox from 'selenium-webdriver/firefox';
import * as safari from 'selenium-webdriver/safari';
import * as Path from 'path';
import { BrowserOptions, Browser } from '../types';
import chalk from 'chalk';
import * as Process from 'child_process'

function isBrowser(browser: Browser): Boolean {
    return browser != 'node'
}

export const benchmark = async (
  options: BrowserOptions,
  name: string,
  tag: string | null,
  html: string,
  js: string
) => {
  if (isBrowser(options.browser)) {
    return visitBrowser(options,name,tag,html)
  } else {
    return visitNode(options,name,tag,js)
  }
};

const visitNode = async (
  options: BrowserOptions,
  name: string,
  tag: string | null,
  js: string
) => {

  const label: string = tag == null ? name : name + ', ' + tag;
  console.log(
      label.padEnd(20, ' ') +
        chalk.green(' -> ') +
        chalk.yellow("Node")
  );
  const stdout = Process.execSync(`node --allow-natives-syntax ${js}`)
  const result = JSON.parse(stdout.toString())
  return { name: name, tag: tag, browser: options.browser, results: result.benchmarks, v8: result.v8 };
};



const visitBrowser = async (
  options: BrowserOptions,
  name: string,
  tag: string | null,
  html: string
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
    await driver.get('file://' + Path.resolve(html));
    await driver.wait(Webdriver.until.titleIs('done'), 480000);
    result = await driver.executeScript('return window.results;');
  } finally {
    await driver.quit();
  }
  return { name: name, tag: tag, browser: options.browser, results: result.benchmarks, v8: result.v8 };
};



