# Project Name

## Description

This project is a React application that includes configurations for React Router, Storybook, Cypress, Cucumber, and Vite.

---

## Descrição

Este projeto é uma aplicação React que inclui configurações para React Router, Storybook, Cypress, Cucumber e Vite.

---

## Features

- **React Router**: For managing routing in the application.
- **Storybook**: For developing and testing UI components in isolation.
- **Cypress**: For end-to-end testing of the application.
- **Cucumber**: For Behavior-Driven Development (BDD) testing.
- **Vite**: For a fast development environment.

---

## Getting Started

### Prerequisites

- Node.js (version >= 18)
- npm or Yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/jcelsocosta/react-boilerplace.git
   cd react-boilerplace
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

---

## Configurations

### React Router

- Basic setup example in `src/App.js`:

  ```jsx
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
  import Home from './components/Home'
  import About from './components/About'

  function App() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    )
  }

  export default App
  ```

### Storybook

```jsx
// src/components/Button.stories.js

import React from 'react'
import { Button } from './Button'

export default {
  title: 'Example/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  label: 'Button'
}
```

### Cypress

- Install Cypress:

  ```bash
  npm install cypress --save-dev
  # or
  yarn add cypress --dev
  ```

- Open Cypress:

  ```bash
  npx cypress open
  ```

### Cucumber

- Install necessary packages:

- Example feature file: `cypress/integration/example.feature`

  ```gherkin
  Feature: Login functionality

    Scenario: Successful login
      Given I am on the login page
      When I enter valid credentials
      Then I should be redirected to the dashboard
  ```

- Step definitions: `cypress/support/steps.js`

  ```javascript
  const { Given, When, Then } = require('@cucumber/cucumber')

  Given('I am on the login page', () => {
    cy.visit('/login')
  })

  When('I enter valid credentials', () => {
    cy.get('input[name="username"]').type('testuser')
    cy.get('input[name="password"]').type('password')
    cy.get('button[type="submit"]').click()
  })

  Then('I should be redirected to the dashboard', () => {
    cy.url().should('include', '/dashboard')
  })
  ```

### Vite

- Basic Vite configuration in `vite.config.js`:

  ```javascript
  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    plugins: [react()]
  })
  ```

---

## Running Tests

### Cypress

Run tests with:

```bash
npm run cypress:open
```
