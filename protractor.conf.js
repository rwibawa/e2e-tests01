// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumArgs: ['-Dwebdriver.ie.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\MicrosoftWebDriver.exe'],

  allScriptsTimeout: 240000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],

  // capabilities: {
  //   'browserName': 'MicrosoftEdge',
  //   elementScrollBehavior: 1,
  //   nativeEvents: false
  // },
  //java -jar "C:\Users\<your user>\AppData\Roaming\npm\node_modules\protractor\node_modules\webdriver-manager\selenium\selenium-server-standalone-2.53.1.jar" -Dwebdriver.gecko.driver=C:\tools\gecko\geckodriver.exe -Dwebdriver.firefox.bin="C:\Program Files\Nightly\firefox.exe" -Dwebdriver.edge.driver="C:\tools\gecko\MicrosoftWebDriver.exe"

  // capabilities: {
  //   'browserName': 'internet explorer',
  //   'platform': 'ANY',
  //   'version': '11',
    // 'ignoreProtectedModeSettings': true
  // },
  // seleniumArgs: ['-Dwebdriver.ie.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\IEDriverServer3.12.0.exe'],
  // localSeleniumStandaloneOpts : {
  //   jvmArgs : ["-Dwebdriver.ie.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\IEDriverServer3.12.0.exe"] 
  //   // e.g: "node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer_x64_X.XX.X.exe"
  // },
  
  // capabilities: {
  //   'browserName': 'chrome', 

  // Headless Chrome
    // chromeOptions: { args: [ "--headless", "--disable-gpu", "--window-size=800,600"] }
  // },

  // capabilities: {
  //   browserName: 'firefox',
  //   marionette: true,
  //   "firefox_binary": "C:/Program\ Files/Mozilla\ Firefox/firefox.exe",
  //   acceptInsecureCerts: true,
  
  // Headless Firefox
    // 'moz:firefoxOptions': {
    //   binary: "C:/Users/rwibawa/AppData/Local/Mozilla\ Firefox/firefox.exe",
  //      args: [ "--headless" ]
    //  }
  // },

  // if multiCapabilities is defined, the runner will ignore the capabilities configuration.
  multiCapabilities: [{
    browserName: 'firefox',
    marionette: true,
    "firefox_binary": "C:/Program\ Files/Mozilla\ Firefox/firefox.exe",
    acceptInsecureCerts: true,
  }, {
    'browserName': 'chrome'
  },{
    'browserName': 'internet explorer',
    'platform': 'ANY',
    'version': '11',
  },
  ],

  // capabilities: {
  //   browserName: 'firefox',
  //   marionette: true,
  // },
  directConnect: false,
  // localSeleniumStandaloneOpts: {
  //     jvmArgs: ['-Dwebdriver.gecko.driver=node_modules\protractor\node_modules\webdriver-manager\selenium\geckodriver-v0.20.1']
  // },

  // directConnect: true,
  // getPageTimeout: 240000,
  baseUrl: 'http://localhost:8091/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 240000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
