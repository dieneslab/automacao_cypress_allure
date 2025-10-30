const { defineConfig } = require("cypress")
const allureWriter = require("@shelex/cypress-allure-plugin/writer")
 
module.exports = defineConfig({
  projectId: "otmmhz",
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config;
    },
    experimentalPromptCommand: true
  },
  env: {
    allure: true,
    allureReuseAfterSpec: true,
    allureResultsPath: "allure-results",
  },
})