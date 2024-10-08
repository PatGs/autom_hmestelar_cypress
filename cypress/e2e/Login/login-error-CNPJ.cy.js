import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com número de CNPJ inválido', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Inserir o número de CNPJ inválido e realizar o login, validar a mensagem de erro', () => {
        telaInicialLogin.radioCNPJ();
        telaInicialLogin.inputCNPJinvalido();
    });

    it('Inserir senha inválida', () => {
        telaInicialLogin.radioCNPJ();
        telaInicialLogin.inputCNPJ();
        telaInicialLogin.inputPassInvalida();
        telaInicialLogin.validarerroPass();
    });
    
})