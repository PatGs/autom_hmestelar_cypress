import criarConta from '../../support/pageObjects/criarConta-pageObjects'

describe('Criar uma conta nova.', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Acessar a página de Criar uma conta e inserir um CPF válido', () => {
      criarConta.buttonCriarConta();
      const cpfValido = criarConta.gerarCPF();
      criarConta.inputCPF(cpfValido);
      criarConta.inputAceite();
      criarConta.buttonContinuar();
      
    });

  });
  
  