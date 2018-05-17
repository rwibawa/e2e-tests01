# e2e-tests01
End-To-End tests with Protractor (Selenium WebDrivers) in angular framework.

## Commands
Run it with command below:
```sh
$ ng serve --port=8091 --env=local --app=1 --proxy-config=proxy.conf.json
$ ng e2e --no-serve

$ ng e2e --port=8091 --env=local --app=1 --proxy-config=proxy.conf.json

C:>SET PATH=%PATH%;%NVM_HOME%;%NVM_SYMLINK%

# Protractor commands:
C:>node node_modules\protractor\bin\webdriver-manager --help
C:>node node_modules\protractor\bin\webdriver-manager version
C:>node node_modules\protractor\bin\webdriver-manager status
C:>node node_modules\protractor\bin\webdriver-manager update --chrome
C:>node node_modules\protractor\bin\webdriver-manager update --ignore_ssl --ie
C:>node node_modules\protractor\bin\protractor --help
C:>node node_modules\protractor\bin\protractor --version

# start the selenium server
C:>node node_modules\protractor\bin\webdriver-manager start
# on other cmd
C:>node node_modules\protractor\bin\protractor

C:>node node_modules\protractor\bin\webdriver-manager clean
C:>node node_modules\protractor\bin\webdriver-manager update --versions.standalone=3.4.0 --ie64 --versions.ie=3.4.0
C:>node node_modules\protractor\bin\webdriver-manager start --versions.standalone=3.4.0--versions.ie=3.4.0 --edge=node_modul
es/protractor/node_modules/webdriver-manager/selenium/MicrosoftWebDriver.exe
# on other cmd
C:>node node_modules\protractor\bin\protractor protractor.conf.js

```

Open it in the browser at [http://localhost:8091](http://localhost:8093).

Notes:
> To run the e2e tests with Chromium (Headless Chrome), enable the _chromeOptions_ in `protractor.conf.js`.
> Download the [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/) with correct build number. Put it in `node_modules\protractor\node_modules\webdriver-manager\selenium\MicrosoftWebDriver.exe`.
