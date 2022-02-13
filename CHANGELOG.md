# 0.3.4

- Fix "phantom comments" issue. The sourceFile's comments were intermingling
  with optimized-record output causing runtime exceptions in some cases. It's
  suspected to be an issue

- Bump typescript compiler to 4.5.5

- Expose `transform: (jsSource: string) => string` JS API. Useful for build toolchains.

- Update chromedriver to work with latest version of Chrome
