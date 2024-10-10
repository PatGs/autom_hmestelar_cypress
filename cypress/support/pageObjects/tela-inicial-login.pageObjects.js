const elem = require('../elements/tela-inicial-login.elements').ELEMENTS

class telaInicialLogin{
// Função de input dos campos de CPF/CNPJ e senha
    inputCPF(){
        cy.get(elem.inputCPF).type('36551095801').type('{enter}');
        cy.contains('CPF cadastrado').should('be.visible');
    }
    inputPass(){
        cy.get(elem.inputPass).type('Teste@123').type('{enter}')
    }
    inputPassCNPJ(){
        cy.get(elem.inputPassCNPJ).type('13497072000138').type('{enter}');
    }
    inputCPFinvalido(){
        cy.get(elem.inputCPFinvalido).type('99999999999').type('{enter}');
        cy.get('.text-xs.ml-4.mt-2.text-red-hm').should('contain.text', 'CPF inválido, insira um CPF válido.');
    }
    inputPassInvalida(){
        cy.get(elem.inputPassInvalida).type('testeteste').type('{enter}');
        cy.get('.text-xs.ml-4.mt-2.text-red-hm', {timeout: 5000}).should('contain.text', 'Senha incorreta, tente novamente');
    }
    inputCNPJ(){
        cy.get(elem.inputCNPJ).type('13497072000138').type('{enter')
    }
    inputCNPJinvalido(){
        cy.get(elem.inputCNPJinvalido).type('99999999999999').type('{enter]');
        cy.get('.text-xs.ml-4.mt-2.text-red-hm').should('contain.text', 'CNPJ inválido, insira um CNPJ válido.');
    }

// Função que realiza o clique no radio de CNPJ
    radioCNPJ(){
        //clica no radio button com o valor CNPJ
        cy.get('input[value="cnpj"]').should('be.visible').click();
        //Verifica se o texto "CNPJ cadastrado" está visível em algum elemento após a ação
        cy.contains('CNPJ cadastrado').should('be.visible');
    }

// Função que valida as mensagens de erros dos campos de input de CPF/CNPJ e Senha
    validarerroCPF(){
        cy.get('.text-xs.ml-4.mt-2.text-red-hm').should('contain.text', 'CPF inválido, insira um CPF válido.');
    }
    validarerroPass(){
        cy.get('.text-xs.ml-4.mt-2.text-red-hm', {timeout: 5000}).should('contain.text', 'Senha incorreta, tente novamente');
    }
    validarerroCNPJ(){
        cy.get('.text-xs.ml-4.mt-2.text-red-hm').should('contain.text', 'CNPJ inválido, insira um CNPJ válido.');
    }

    validarLGPD() {
        // Aguarda o modal por um tempo para garantir que ele carregue
        cy.wait(15000); // Ajuste o tempo de espera se necessário
        
        // Verifica se o modal de LGPD está presente no DOM
        cy.get('body').then(($body) => {
          if ($body.find('div.flex.justify-between.items-start.lg\\:items-center').length > 0) {
            cy.get('div.flex.justify-between.items-start.lg\\:items-center', { timeout: 10000 })
              .should('be.visible');
            
            // Força o clique no checkbox fora do within
            cy.get('#privacy-terms').click({ force: true });
      
            // Aguarda o botão ser visível e habilitado antes de clicar
            cy.contains('button', 'Li e aceito', { timeout: 10000 })
              .should('not.be.disabled') // Aguarda até que o botão esteja habilitado
              .click({ force: true }); // Então clica no botão
          } else {
            cy.log('O modal de LGPD não está presente, o usuário já aceitou.');
          }
        });
      }
      
            
      
        
        
}

export default new telaInicialLogin();