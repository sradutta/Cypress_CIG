const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,

  e2e: {
    baseUrl: 'http://localhost:1234',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*', '**/examples/*'],
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
    watchForFileChanges: false
  }
})