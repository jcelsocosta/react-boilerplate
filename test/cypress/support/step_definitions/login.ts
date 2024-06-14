import { Then, When } from '@badeball/cypress-cucumber-preprocessor'

When('I visit duckduckgo.com', () => {
  cy.visit('http://localhost:4000')
})

Then('I should see a search bar', () => {
  cy.get('input[type=text]').should(
    'have.attr',
    'placeholder',
    'Seach the web without being tracked'
  )

  assert.deepEqual({}, {})
})
