import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitle() {
    return element(by.css('body > app-root > div > div > section > div.small-7.medium-8 > h2')).getText();
  }
}
