# PlaywrightWithAI

This project leverages Playwright for end-to-end testing, enhanced with AI capabilities provided by the `@zerostep/playwright` library.

## Overview

The project demonstrates how to use Playwright for testing web applications with AI-driven interactions. It includes test cases for automating user actions, such as logging into a website, and integrates seamlessly with CI/CD pipelines using GitHub Actions.

## Prerequisites

- Node.js (LTS version recommended)
- Playwright dependencies (installed automatically)

## Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:pothurajtharun/PlayWrightWithAI.git
   cd PlayWrightWithAI
2. Install dependencies:
    ```bash
    npm install
3. Install Playwright browsers:
    ```bash
    npx playwright install --with-deps

## Running Tests
To execute the tests locally, run:
```bash
    npx playwright test
````
This will run all tests and generate an HTML report in the `playwright-report/` directory.

## Test Example
Here is an example test for logging into the Sauce Demo website:

```
import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('Login to sauce demo website.', async ({ page }) => {
  const aiArgs = { page, test };
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle("Swag Labs");
  await ai('Enter the name "standard_user" as Username.', aiArgs);
  await ai('Enter the name "secret_sauce" as Password.', aiArgs);
  await ai('Click Login button.', aiArgs);
});
```
## CI/CD Integration
The project includes a GitHub Actions workflow to automate testing on every push or pull request. The workflow:

Installs dependencies
Installs Playwright browsers
Runs the tests
Uploads the test report as an artifact

## License
This project is licensed under the ISC License.