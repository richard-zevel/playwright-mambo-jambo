import { Locator, Page } from '@playwright/test'

export default class Header {
  // Element Locators
  readonly locators = {
    container: '.navigation.navbar',
    logoLink: '.navbar-brand',
  }

  // Elements
  readonly page: Page
  readonly container: Locator
  readonly logoLink: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.container = page.locator(this.locators.container)
    this.logoLink = page.locator(this.locators.logoLink)
  }

  // Methods
  async waitForHeader() {
    await this.container.waitFor({ state: 'visible' })
  }
}
