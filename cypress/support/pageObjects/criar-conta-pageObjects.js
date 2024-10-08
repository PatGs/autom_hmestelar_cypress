const elem = require('../elements/criar-conta.elements').ELEMENTS

class criarConta{

    inputCPF(cpfValido){
        cy.get(elem.inputCPF).type(cpfValido).type('{enter}');
    }

    buttonCriarConta(){
        cy.get('.font-bold.text-secondary-magenta.underline')
        .should('contain.text', 'Crie uma conta')
        .click()
    }

    inputAceite(){
        cy.get(elem.checkboxAceite).check().should('be.checked');
    }

    buttonContinuar(){
        cy.get('button')
        .contains('Continuar')
        .click();  
    }


    gerarCPF() {
        let cpf = [];
        let soma = 0;
        let resto;
    
        // Gera os 9 primeiros dígitos do CPF
        for (let i = 0; i < 9; i++) {
            cpf[i] = Math.floor(Math.random() * 10); // Corrigido para gerar dígitos entre 0 e 9
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