import telaInicial from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com número de CNPJ inválido', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Inserir o número de CNPJ inválido e realizar o login, validar a mensagem de erro', () => {
        telaInicial.radioCNPJ();
        telaInicial.inputCNPJinvalido();
    });

    it('Inserir senha inválida', () => {
        telaInicial.radioCNPJ();
        telaInicial.inputCNPJ();
        telaInicial.inputPassInvalida();
        telaInicial.validarerroPass();
    });
    
})