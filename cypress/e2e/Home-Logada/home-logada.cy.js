import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'
import homeLogada from '../../support/pageObjects/home-logada-pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Inserir CPF e Senha correto e realizar o Login', () => {
        telaInicialLogin.inputCPF();
        telaInicialLogin.inputPass();
        telaInicialLogin.validarLGPD();
        homeLogada.validarTextoH1();
      })
      
})