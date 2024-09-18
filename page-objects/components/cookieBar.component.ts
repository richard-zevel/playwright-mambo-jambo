import { Locator, Page } from '@playwright/test'

export default class CookieBar {
  // Element Locators
  readonly locators = {
    container: '.ch2-dialog.ch2-dialog-bottom.ch2-visible',
    acceptButton: `.ch2-btn-primary`,
    declineButton: '.cookie-bar__decline',
  }

  // Elements
  readonly page: Page
  readonly container: Locator
  readonly acceptButton: Locator
  readonly declineButton: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.container = page.locator(this.locators.container)
    this.acceptButton = page.locator(this.locators.container).locator(this.locators.acceptButton)
    this.declineButton = page.locator(this.locators.declineButton)
  }

  // Methods
  async acceptCookies() {
    await this.acceptButton.click()
  }

  async declineCookies() {
    await this.declineButton.click()
  }
}
