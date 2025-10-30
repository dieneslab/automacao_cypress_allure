describe('Prompt test examples', () => {

  it('test using command cy.prompt', () => {
    cy.prompt(['visit the page http://example.cypress.io',
       'and confirm text "Kitchen Sink" is present',
      ])
  })
})