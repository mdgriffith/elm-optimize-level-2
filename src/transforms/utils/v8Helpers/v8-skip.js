(function (_global) {
  function waitForV8(cb) {
    cb();
  }

  // Add this helper function
  _global.waitForV8 = waitForV8;
})(typeof exports === 'undefined' ? this : exports);
