/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('forward freight home page', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://www.forwardfreightlogistics.net/');
  })

  it('should display Home Page', () => {
    const homePage = `#1644708359`
    cy.get(homePage).should(`be.visible`)
  })

  it('should click on drawer', () => {
    const connectButton = '#layout-drawer-hamburger'
    cy.get(connectButton).should('be.visible')
    cy.get(connectButton).click()
  })
  it('sould click on Our Services and verify page',() => {
    const ourServices = '.unifiednav__item.dmUDNavigationItem_010101799119'
    cy.get(ourServices).should('be.visible')
  })

})

