const { defineConfig } = require("cypress")
const { allureCypress } = require("allure-cypress/reporter")
const allureWriter = require("@shelex/cypress-allure-plugin/writer")
const os = require("node:os")

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://example.cypress.io",
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      allureCypress(on, config, {
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
          runner: process.env.RUNNER_NAME || "GitHub Actions",
          branch: process.env.GITHUB_REF_NAME || "main",
          commit_sha: process.env.GITHUB_SHA || "unknown",
        },
      })
      return config;
    },
  },
  env: {
    allure: true,
    allureReuseAfterSpec: true,
    allureResultsPath: "allure-results",
  },
})