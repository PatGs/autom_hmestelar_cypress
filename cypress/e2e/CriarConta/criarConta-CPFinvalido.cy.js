import criarConta from '../../support/pageObjects/criarConta-pageObjects'
import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'


describe('Teste de formulário com CPF', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Acessar a página de Criar uma conta e inserir um CPF válido', () => {
      criarConta.buttonCriarConta();
      criarConta.inputCPFinvalido();
    })
})