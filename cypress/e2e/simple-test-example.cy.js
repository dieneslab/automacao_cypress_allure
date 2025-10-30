describe('Test Cypress page', () => {

  it('Should visit the example page', () => {
    cy.visit('/')
    cy.title().should('include', 'Kitchen Sink')
  })

  it('Should visit the example page and fail', () => {
    cy.visit('/')
    cy.title().should('include', 'Kitchen Sink Test with error')
  })

  it('Should visit the example utilities page', () => {
    cy.visit('/utilities')
    cy.get('h1').should('contain.text', 'Utilities')
  })

})