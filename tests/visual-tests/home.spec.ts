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
    // make sure the logo is visible
    // take screenshot of the cookiebar
    home.header.logoLink.waitFor({ state: 'visible' })
    await expect(home.cookieBar.container).toHaveScreenshot('cookie-bar.png')
  })

  test('Home Page is displayed correctly', async () => {
    // make sure the acceptButton is visible
    // accept cookies
    // Take screenshot of the whole page
    await expect(home.cookieBar.acceptButton).toBeVisible()
    await home.cookieBar.acceptCookies()
    await expect(page).toHaveScreenshot('home-page.png', { fullPage: true })
  })
})
