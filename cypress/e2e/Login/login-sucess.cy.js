import telaInicial from '../../support/pageObjects/tela-inicial-login.pageObjects'

describe('Realizar o login com sucesso na plataforma Estelar', () => {
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Inserir CPF e Senha correto e realizar o Login', () => {
        telaInicial.inputCPF('36551095801');
        telaInicial.inputPass('Teste@123');
      }) 
})
