import { Page } from '@playwright/test'
import CookieBar from './components/cookieBar.component'
import Header from './components/header.component'
import Base from './base.page'

export default class Home extends Base {
  // Element Locators

  // Components
  readonly cookieBar: CookieBar
  readonly header: Header

  // Constructor
  constructor(page: Page) {
    super(page)
    this.cookieBar = new CookieBar(page)
    this.header = new Header(page)
  }

  // Methods
  public async open() {
    super.open('/')
  }

  public async acceptCookieConsent(): Promise<void> {
    await this.waitForCookieConsent()
    await this.cookieBar.acceptButton.click()
  }
}
