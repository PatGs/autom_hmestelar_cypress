import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com número de CPF inválido', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Inserir o número de CPF inválido e realizar o login, validar a mensagem de erro', () => {
        telaInicialLogin.inputCPFinvalido();
        telaInicialLogin.validarerroCPF()
    })   
      
    it('Inserir senha inválida', () => {
        telaInicialLogin.inputCPF();
        telaInicialLogin.inputPassInvalida();
        telaInicialLogin.validarerroPass()
    });
})