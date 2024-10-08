import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Inserir CPF e Senha correto e realizar o Login', () => {
        telaInicialLogin.inputCPF();
        telaInicialLogin.inputPass();
      }) 
      
    it('Inserir o CNPJ e Senha e realizar o Login', () => {
        telaInicialLogin.radioCNPJ();
        telaInicialLogin.inputCNPJ();
        telaInicialLogin.inputPassCNPJ();
    })
})
