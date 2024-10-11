import telaInicialLogin from '../../support/pageObjects/tela-inicial-login.pageObjects'
import homeLogada from '../../support/pageObjects/home-logada-pageObjects'

describe('Logar na plataforma Estelar com usuário que possui empreendimento.', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Realizar o login com sucesso e conferir os menus se aparecem para usuário com empreendimento', () => {
        telaInicialLogin.inputCPFsemEmpreendimento();
        telaInicialLogin.inputPassSemEmpreendimento();
        telaInicialLogin.validarLGPD();
        homeLogada.validarTextoH1();
        homeLogada.validarMenuPagamentosNaoExibido("/meu-hm/pagamentos");

    })

})