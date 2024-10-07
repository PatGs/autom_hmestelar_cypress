import telaInicial from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com número de CPF inválido', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Inserir o número de CPF inválido e realizar o login, validar a mensagem de erro', () => {
        telaInicial.inputCPFinvalido();
        telaInicial.validarerroCPF()
    })   
      
    it('Inserir senha inválida', () => {
        telaInicial.inputCPF();
        telaInicial.inputPassInvalida();
        telaInicial.validarerroPass()
    });
})