import React from 'react'
import Products from './page'

describe('<Products />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Products />)
  })
})