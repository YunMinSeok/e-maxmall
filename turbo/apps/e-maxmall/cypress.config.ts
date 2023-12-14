import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },

  e2e: {
    specPattern: "cypress/integration/**/*.cy.ts",
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      // implement node event ßlisteners here
    },
  },
});
