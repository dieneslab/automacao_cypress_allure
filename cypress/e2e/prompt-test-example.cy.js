describe('Prompt test examples', () => {

  it('test using command cy.prompt', () => {
    cy.prompt(['visit the page http://example.cypress.io',
      'and confirm text "Kitchen Sink" is present'
    ])
  })

  it('validate if test case 1 at least i have 18 steps using command cy.prompt', () => {
    cy.prompt(['Visit the page https://automationexercise.com/',
      'validate if button Test Cases is present',
      'click on button Test Cases',
      'validate if url is correct https://automationexercise.com/test_cases',
      'click on link Test Case 1: Register User',
      'validate if step 1. Launch browser is opened below the title',
      'validate next steps until step 18 is opened below the title',
    ])
  })

})