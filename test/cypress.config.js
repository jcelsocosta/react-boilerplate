const createEsBuildPlugin =
  require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsBuildPlugin(config)]
      })
      on('file:preprocessor', bundler)
      await addCucumberPreprocessorPlugin(on, config)
      return config
    },
    env: {
      omitFiltered: true,
      filterSpecs: true
    },
    specPattern: 'cypress/**/*.feature'
  }
})
