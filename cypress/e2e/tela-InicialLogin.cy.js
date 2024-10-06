
import telaInicial from '../support/pageObjects/tela-inicial-login.pageObjects'

describe('Acessar a página de Login do HM Estelar', () => {
  it('Abrir o site', () => {
    cy.visit('https://apphomolog.hmestelar.com.br/login')
    telaInicial.inputText()
  })
  
})