import telaInicial from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Logar com CNPJ e senha Corretos', () => {
        telaInicial.radioCNPJ();
        telaInicial.inputCNPJ();
        telaInicial.inputPassCNPJ();
    })   
})