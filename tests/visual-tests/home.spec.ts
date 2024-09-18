import test, { expect, Page } from '@playwright/test'
import Home from '../../page-objects/home.page'

let page: Page
let home: Home

test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext()
  page = await context.newPage()
  home = new Home(page)
  await home.open()
})

test.afterEach(async () => {
  await page.close()
})

test.describe('Home page Visual Tests', { tag: '@visual' }, () => {
  test('Cookie Bar is displayed correctly', async () => {
    // Open Home Page
    // Wait for Cookie Bar to load
    // Take screenshot of the cookie bar.
    // Compare with baseline
    await expect(home.cookieBar.container).toBeVisible()
    await expect(home.cookieBar.container).toHaveScreenshot('cookie-bar.png')
  })

  test('Home Page is displayed correctly', async () => {
    await expect(home.cookieBar.acceptButton).toBeVisible()
    await home.cookieBar.acceptCookies()
    await expect(page).toHaveScreenshot('home-page.png', { fullPage: true })
  })
})
