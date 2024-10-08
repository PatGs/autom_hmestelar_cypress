class homeInicial{
    validarTextoH1() {
        cy.get('h1')
        .should('contain.text', 'Muitas vantagens em um só lugar!');
    }

    validarTextoH4(){
        cy.get('h4')
        .contains('Como participar?')
    }

    validarButtonCadastrar(){
        cy.get('button')
        .contains('Quero me cadastrar')
        .click();      
    }
    validarButtonParticipar(){
        cy.get('button')
        .contains('Quero participar!')
        .click(); 
    }
}

export default new homeInicial();