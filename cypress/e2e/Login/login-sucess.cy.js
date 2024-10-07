import telaInicial from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Inserir CPF e Senha correto e realizar o Login', () => {
        telaInicial.inputCPF();
        telaInicial.inputPass();
      }) 
      
    it('Inserir o CNPJ e Senha e realizar o Login', () => {
        telaInicial.radioCNPJ();
        telaInicial.inputCNPJ();
        telaInicial.inputPassCNPJ();
    })
})
