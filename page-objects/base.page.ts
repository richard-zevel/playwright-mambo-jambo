import { Page } from '@playwright/test'
import CookieBar from './components/cookieBar.component'
import Header from './components/header.component'

export default class Base {
  // Element Locators

  // Components
  readonly page: Page
  readonly cookieBar: CookieBar
  readonly header: Header

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.cookieBar = new CookieBar(page)
    this.header = new Header(page)
  }

  // Methods
  public async open(path: string): Promise<void> {
    await this.page.goto(path)
  }

  protected async waitForCookieConsent(): Promise<void> {
    await this.cookieBar.acceptButton.waitFor({ state: 'visible' })
  }
}
