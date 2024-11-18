const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });
      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature", // Specify where to find feature files
    baseUrl: "https://the-internet.herokuapp.com", // Default base URL for tests
  },
});
