const elem = require('../elements/criarConta.elements').ELEMENTS

class criarConta{

    inputCPF(cpfValido){
        cy.get(elem.inputCPF).type(cpfValido).type('{enter}');
    }
    inputCPFcadastrado(){
        cy.get(elem.inputCPF).type('36551095801').type('{enter}');
    }
    inputCPFinvalido(){
        cy.get(elem.inputCPF).type('99999999999').type('{enter}');
        cy.get('.text-xs.ml-4.mt-2.text-red-hm').should('contain.text', 'CPF inválido, insira um CPF válido.');
    }
    inputAceite(){
        cy.get(elem.checkboxAceite).check().should('be.checked');
    }

    buttonCriarConta(){
        cy.get('.font-bold.text-secondary-magenta.underline')
        .should('contain.text', 'Crie uma conta')
        .click()
    }
    buttonContinuar(){
        cy.get('button')
        .contains('Continuar')
        .click();  
    }
    btnClose(){
        cy.get(elem.buttonClose).click();
    }

    bntAcessarConta(){
        cy.contains('button', 'Acessar conta').click();
    }
    //Função que valida o modal de usuário já cadastrado
    validarCadastrado(){
        cy.get('h1')
        .should('contain.text', 'Oba! O seu CPF já está cadastrado no HM Estelar.');
    }

    //Função que gera automático o número do CPF 
    gerarCPF() {
        let cpf = [];
        let soma = 0;
        let resto;
    
        // Gera os 9 primeiros dígitos do CPF
        for (let i = 0; i < 9; i++) {
            cpf[i] = Math.floor(Math.random() * 10); // Gera dígitos entre 0 e 9
        }
    
        // Calcula o primeiro dígito verificador
        for (let i = 0; i < 9; i++) {
            soma += cpf[i] * (10 - i);
        }
        resto = 11 - (soma % 11);
        cpf[9] = resto >= 10 ? 0 : resto;
    
        // Calcula o segundo dígito verificador
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += cpf[i] * (11 - i);
        }
        resto = 11 - (soma % 11);
        cpf[10] = resto >= 10 ? 0 : resto;
    
        // Retorna o CPF como uma string (somente números)
        return cpf.join('');
    }
}

export default new criarConta();