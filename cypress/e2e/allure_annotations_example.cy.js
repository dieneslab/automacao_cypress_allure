
/// <reference types='cypress' />

// Certifique-se de que o plugin allure-cypress está configurado em cypress/support/e2e.js
// import '@shelex/cypress-allure-plugin'

describe('Allure Annotations Examples Cypress', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('Teste com Severity Blocker e Feature de Autenticação', () => {
    // Adiciona anotação de Severity
    cy.allure().severity('blocker')
    // Adiciona anotação de Feature
    cy.allure().feature('Autenticação de Usuário')

    cy.get('h1').should('contain', 'Kitchen Sink')
    // Simula uma falha para ver o screenshot
    // cy.get('element-inexistente').should('be.visible')
  })

  it('Teste com Severity Critical e Story de Login', () => {
    // Adiciona anotação de Severity
    cy.allure().severity('critical')
    // Adiciona anotação de Story
    cy.allure().story('Login com credenciais válidas')
    // Adiciona anotação de Owner
    cy.allure().owner('dieneslab')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  it('Teste com Severity Normal e Tag de Regressão', () => {
    // Adiciona anotação de Severity
    cy.allure().severity('normal')
    // Adiciona anotação de Tag
    cy.allure().tag('regressao', 'smoke')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  it('Teste com múltiplas Tags e Owner diferente', () => {
    cy.allure().owner('qa_team')
    cy.allure().tag('e2e', 'funcional', 'dados')
    cy.allure().severity('minor')

    cy.get('h1').should('contain', 'Kitchen Sink')
  })

  context('Grupo de testes para funcionalidades de busca', () => {
    beforeEach(() => {
      // Anotações aplicadas a um bloco `context` ou `describe` afetam todos os testes dentro dele
      cy.allure().feature('Funcionalidade de Busca')
      cy.allure().owner('desenvolvimento')
    })

    it('Deve buscar por um termo válido', () => {
      cy.allure().story('Busca por produto existente')
      cy.allure().severity('normal')
      cy.get('h1').should('contain', 'Kitchen Sink')
    })

    it('Deve exibir mensagem de nenhum resultado para termo inválido', () => {
      cy.allure().story('Busca por produto inexistente')
      cy.allure().severity('trivial')
      cy.get('h1').should('contain', 'Kitchen Sink')
    })
  })

})

