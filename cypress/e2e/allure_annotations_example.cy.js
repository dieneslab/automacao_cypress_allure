describe('Allure Annotations Examples Cypress', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Test with Blocker Severity and Authentication Feature', () => {
    // Adds Severity annotation
    cy.allure().severity('blocker')
    // Adds Feature annotation
    cy.allure().feature('User Authentication')

    cy.get('h1').should('contain', 'Kitchen Sink')
    // Simulates a failure to see the screenshot
    // cy.get('non-existent-element').should('be.visible')
  })

  it('Test with Critical Severity and Login Story', () => {
    // Adds Severity annotation
    cy.allure().severity('critical')
    // Adds Story annotation
    cy.allure().story('Login with valid credentials')
    // Adds Owner annotation
    cy.allure().owner('dieneslab')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  it('Test with Normal Severity and Regression Tag', () => {
    // Adds Severity annotation
    cy.allure().severity('normal')
    // Adds Tag annotation
    cy.allure().tag('regression', 'smoke')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  it('Test with multiple Tags and a different Owner', () => {
    cy.allure().owner('qa_team')
    cy.allure().tag('e2e', 'functional', 'data')
    cy.allure().severity('minor')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  context('Test suite for search functionalities', () => {
    beforeEach(() => {
      // Annotations applied to a `context` or `describe` block affect all tests within it
      cy.allure().feature('Search Functionality')
      cy.allure().owner('development')
    })

    it('Should search for a valid term', () => {
      cy.allure().story('Search for an existing product')
      cy.allure().severity('normal')
      cy.get('h1').should('contain', 'Kitchen Sink')
    })

    it('Should display a no results message for an invalid term', () => {
      cy.allure().story('Search for a non-existent product')
      cy.allure().severity('trivial')
      cy.get('h1').should('contain', 'Kitchen Sink')
    })
  })

})
