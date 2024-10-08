import homeInicial from '../../support/pageObjects/home-pageObjects'

describe('Acessar a página da Home de HM Estelar', () => {
    beforeEach(()=>{
        cy.visit('/')
    })
    
    it('Conferir texto H1 na home e clicar no botão Quero me cadastrar', () => {
        homeInicial.validarTextoH1();
        homeInicial.validarButtonCadastrar()
    });

    it('Conferir texto h4 "Como participar?" e clicar no botão Quero me cadastrar', () => {
        homeInicial.validarTextoH4();
        homeInicial.validarButtonParticipar()
    });
  })