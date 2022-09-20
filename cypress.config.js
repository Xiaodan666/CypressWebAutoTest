const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://localhost:3100",
  },
  projectId: "2e9y78",
  env: {
    login_url: "https://localhost:3100/#/login",
  },
  // // Generate mocha report
  // reporter:'mochawesome',
  // reporterOptions: {
  //   reportDir:'cypress/results',
  //   overwrite:false,
  //   html:true,
  //   json:true
  // },
  reporter: "junit",
  reporterOptions: {
    mochaFile: "allure-results/test_report_[hash].xml",
    toConsole: true,
    overwrite:false,
  },

  setupNodeEvents(on, config) {
    allureWriter(on, config);
    return config;
  },
});
