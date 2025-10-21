describe('Test Cypress page', () => {
  it('Should visit the example page', () => {
    cy.visit('/');
    cy.title().should('include', 'Kitchen Sink')
  })
  it.skip('Should visit the example page and fail', () => {
    cy.visit('/');
    cy.title().should('include', 'Kitchen Sink Test with error')
  })
})