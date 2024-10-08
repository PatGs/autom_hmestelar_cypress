class homeLogada{
    validarTextoH1() {
        cy.get('h1', {timeout: 10000})
        .should('contain.text', 'Aproveite o universo de vantagens do HM Estelar');
    }
    
}

export default new homeLogada();