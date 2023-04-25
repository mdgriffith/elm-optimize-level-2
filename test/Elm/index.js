const level1 = require('./dist/elm.js');
const level2 = require('./dist/elm-lvl-2.js');
const level3 = require('./dist/elm-lvl-3.js');
const anotherLevel1 = require('./dist/another-elm.js');
const anotherLevel2 = require('./dist/another-elm-lvl-2.js');
const anotherLevel3 = require('./dist/another-elm-lvl-3.js');

const run = (name, elm) =>
  new Promise((resolve, reject) => {
    const app = elm.Elm.Tests.init({ flags: {} });
    app.ports.onSuccessSend.subscribe(resolve);
    app.ports.onFailureSend.subscribe(reject);
  })
    .then((_) => {
      if (!elm.Elm.AnotherTest) {
        return Promise.resolve();
      }
      return new Promise((resolve, reject) => {
        const anotherApp = elm.Elm.AnotherTest.init({ flags: {} });
        anotherApp.ports.onSuccessSend2.subscribe(resolve);
        anotherApp.ports.onFailureSend2.subscribe(reject);
      });
    })
    .then((_) => console.info(`${name} -> Success!`))
    .catch((reason) => {
      console.error(`${name} -> Failing tests: ` + reason);
      process.exit(1);
    });

const main = () => {
  return Promise.all([
    run('normal', level1),
    run('level-2', level2),
    run('level-3', level3),
    run('multi-file normal', anotherLevel1),
    run('multi-file level-2', anotherLevel2),
    run('multi-file level-3', anotherLevel3),
  ]);
};

main();
