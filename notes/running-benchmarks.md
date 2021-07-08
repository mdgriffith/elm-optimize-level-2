# Running Built-in Benchmarks

The built-in benchmarks use selenium webdriver, which requires a headless browser for Chrome, Firefox, and Safari.

The default benchmarks just run in chrome, so

As mentioned here: https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/chrome.html

You'll need to install the latest ChromeDriver release and ensure it's on your PATH: https://chromedriver.chromium.org/downloads

For me(on a Mac) this means:

1. Downloading chromedriver
    - The version needs to match the `chromedriver` version already specified in `package.json`.  Right now it's 91.
2. In finder, right clicking it and opening it in terminal.  This is to convince Apple that you trust this thing.
3. Close that terminal
4. then `cp Downloads/chromedriver /usr/local/bin/chromedriver`

You should be good to run `npm run run-benchmarks`!



# Running your Benchmarks
(instructions still under construction.  Hopefullly they work!)

If you want to use `level-2`'s benchmark runner, which can give you information about V8 internals such as optimization status, we can do that!

First, I think you'll need to install chromedriver like mentioned in the above section.

Then:

1. Clone `lvl-2` as a git submodule to your project.  This will allow you to pull changes as this part is still under development.

2. In the `lvl-2` directory:
   2.1 `npm install`

   2.2 To test things out, try running `npm run lvl-2 -- --benchmark testcases/html`.  
   
      - Two chrome browsers should pop up and run a benchmark, and then in the terminal you should see some results.

3. You'll need to run `npm run lvl-2 -- --benchmark-init ../my-directory-with-my-benchmarks`

   - This copies some files into that directory that are needed to run the benchmarks.  You can see the files at testcases/html/V8.  You can copy them manually from there if you choose.
   
4. You benchmarks need to be located at `Suite.suite`.  Import `import V8.Benchmark.Runner.Json exposing (..)` and use the `benchmark` and `describe functions there instead of the normal ones.

5. Then run `npm run lvl-2 -- --benchmark ../my-directory-with-my-benchmarks`.  You need to point it at the *folder* with the `Suite.elm` file you may have just created.

6. Profit?

7. Once you have that working, you can use `V8.Debug.memory "my tag" someRandomValue` to inspect its' memory representation.

   - `Smi` means SMall Integer and is great for performance.
   - `fast properties` is generally the next step up.
   - anything mentioning dictionary elements is slow.  I'm not sure if this shows up in elm, but might when using a type with a lot of variants that have a bunch of different shapes.



   


      
      