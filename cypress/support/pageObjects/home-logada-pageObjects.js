

class homeLogada{

    validarTextoH1() {
        cy.get('h1', {timeout: 10000})
        .should('contain.text', 'Aproveite o universo de vantagens do HM Estelar');
    }

    validarMenuPagamentos(){
        cy.get('a[href="/meu-hm/pagamentos"]')
        .should('be.visible')  // Certifica que o botão está visível
        //.click();  // Clica no botão
    }
    validarMenuAndamentoObra(){
        cy.contains('h2', 'Andamento da Obra')
        .should('be.visible') 
    }
    validarMenuAcumulePontos(){
        cy.contains('h2', 'Acumule Pontos')
        .should('be.visible') 
    }  
    validarMenuFalecomHM(){
        cy.contains('h2', 'Fale com a HM')
        .should('be.visible') 
    }
    validarMenuIndiqueAmigo(){
        cy.contains('h2', 'Indique amigo')
        .should('be.visible') 
    }
    validarMenuConversecomEME(){
        cy.contains('h2', 'Converse com a Eme')
        .should('be.visible') 
    }
    validarMenuComunicados(){
        cy.contains('h2', 'Comunicados HM')
        .should('be.visible') 
    }
    validarMenuDocumentos(){
        cy.contains('h2', 'Documentos HM')
        .should('be.visible') 
    }
    
    validarMenuPagamentosNaoExibido(menu) {
        cy.get(`a[href="${menu}"]`, { timeout: 5000 })
          .should('not.exist') // Valida que o menu não deve estar presente
          .then(() => {
            cy.log('O menu de Pagamentos não está presente, conforme esperado.');
          });
    }
    
    
}

export default new homeLogada();