const elem = require('../elements/tela-inicial-login.elements').ELEMENTS

class telaInicial{

    inputCPF(cpf){
        cy.get(elem.inputCPF).type(cpf).type('{enter}')
    }

    inputPass(pass){
        cy.get(elem.inputPass).type(pass).type('{enter}')
    }
}


export default new telaInicial();