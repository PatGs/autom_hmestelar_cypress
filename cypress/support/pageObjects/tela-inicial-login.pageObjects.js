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
        cy.get('body').then(($body) => {
          // Verifica se o modal está presente no DOM
          if ($body.find('div.flex.justify-between.items-start.lg\\:items-center').length > 0) {
            // Se o modal existir, tenta interagir com ele
            cy.get('div.flex.justify-between.items-start.lg\\:items-center')
              .should('be.visible')
              .then(($modal) => {
                if ($modal.is(':visible')) {
                  // O modal está visível, então marca o checkbox
                  cy.get('#privacy-terms')
                    .should('be.visible')
                    .check({ force: true });
      
                  // Verifica se o botão de concordar está visível e clica nele
                  cy.contains('Li e concordo com a Política de Privacidade')
                    .should('be.visible')
                    .click({ force: true });
      
                  // Fecha o modal, se houver botão de fechar
                  if (Cypress.$(elem.buttonClose).length > 0) {
                    cy.get(elem.buttonClose)
                      .should('be.visible')
                      .click({ force: true });
                  }
      
                  // Clica no botão "Li e aceito", se presente
                  cy.contains('button', 'Li e aceito')
                    .should('be.visible')
                    .click({ force: true });
                } else {
                  cy.log('O modal está presente, mas não está visível.');
                }
              });
          } else {
            cy.log('O modal de LGPD não está presente, pulando a validação.');
          }
        });
      }
        
}

export default new telaInicialLogin();