# Running Benchmarks

The built-in benchmarks use selenium webdriver, which requires a headless browser for Chrome, Firefox, and Safari.

The default benchmarks just run in chrome, so

As mentioned here: https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html

You'll need to install the latest ChromeDriver release and ensure it's on your PATH: https://chromedriver.chromium.org/downloads

For me(on a Mac) this means:

1. Downloading chromedriver
    - The version needs to match the `chromedriver` version already specified in `package.json`.  Right now it's 91.
2. In finder, right clicking it and opening it in terminal.  This is to convince Apple that you trust this thing.
3. Close that terminal
4. then

```
cp Downloads/chromedriver /usr/local/bin/chromedriver
```

You should be good to run `npm run run-benchmarks`!
