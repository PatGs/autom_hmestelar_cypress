import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Logar com CNPJ e senha Corretos', () => {
        telaInicialLogin.radioCNPJ();
        telaInicialLogin.inputCNPJ();
        telaInicialLogin.inputPassCNPJ();
    })   
})