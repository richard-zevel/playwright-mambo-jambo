import test, { expect, Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import Home from '../../page-objects/home.page'

let page: Page
let home: Home
let axe: AxeBuilder

test.beforeEach(async ({ browser }) => {
  const context = await browser.newContext()
  page = await context.newPage()
  home = new Home(page)
  // Create instance of AxeBuilder.
  axe = new AxeBuilder({ page })
})

test.afterEach(async () => {
  page.close()
})

// TODO: Write a test to check for accessibility violations on the Home Page
// Tag @a11y can be added to the describe statement.
// Do not forget to expose testInfo in the test itself.
// Attach the results to testInfo.
// Make sure to replace spaces with underscores and create meaningful name for file.

test.describe('Home Page Accessibility Tests', { tag: '@a11y' }, () => {
  test('Home Page should have no accessibility violations', async ({}, testInfo) => {
    await home.open()
    await home.cookieBar.container.waitFor({ state: 'visible' })
    const result = await axe.analyze()

    await testInfo.attach(
      `a11y-results_${testInfo.title.replaceAll(' ', '-').toLocaleLowerCase()}`,
      {
        body: JSON.stringify(result, null, 2),
        contentType: 'application/json',
      }
    )

    expect(result.violations.length).toBe(0)
  })
})
