import { Locator, Page } from '@playwright/test'

export default class Header {
  // Element Locators
  readonly locators = {
    container: '.navigation.navbar',
  }

  // Elements
  readonly page: Page
  readonly container: Locator

  // Constructor
  constructor(page: Page) {
    this.page = page
    this.container = page.locator(this.locators.container)
  }

  // Methods
  async waitForHeader() {
    await this.container.waitFor({ state: 'visible' })
  }
}
