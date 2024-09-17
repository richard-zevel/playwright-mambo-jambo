# Playwright Mambo Jambo

Playwright Solution designed for showcase and to demo the purpose and functionality of Playwright testing engine written in Typescript.

## Prerequisites

1. Node (see [.nvmrc](.nvmrc) for version)
2. Yarn (follow instructions in [.yarnrc.yml--TEMPLATE](.yarnrc.yml--TEMPLATE))

## Run locally

1. Run `yarn install`.
2. Run `yarn test` to execute all tests in cli.
3. Run `yarn report` to show the report from previous test run.

## Other Scripts

Please consult [package.json](package.json) for most up-to-date version of scripts.

- `yarn test:open` - run the UI mode of Playwright.
- `yarn test:a11y` - run Accessibility Tests (with `@a11y` tag)
- `yarn test:visual` - run Visual Regression Tests (with `@visual` tag)
- `yarn test:debug` - run tests with tag `@debug`
