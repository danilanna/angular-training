import { browser } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  currentUrl(): Promise<unknown> {
    return browser.getCurrentUrl() as Promise<unknown>;
  }
}
