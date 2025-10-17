describe('Demo Allure Test', () => {
  it('should visit the example page', () => {
    cy.visit('/');
    cy.title().should('include', 'Kitchen Sink');
  });
});