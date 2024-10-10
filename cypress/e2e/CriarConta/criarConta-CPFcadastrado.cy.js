import criarConta from '../../support/pageObjects/criarConta-pageObjects'

describe('Teste de criar uma nova conta com CPF já cadastrado', () => {
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Acessar a página de Criar uma conta e inserir um CPF válido', () => {
      criarConta.buttonCriarConta();
      criarConta.inputCPFcadastrado();
      criarConta.inputAceite();
      criarConta.buttonContinuar();
      criarConta.validarCadastrado();
      criarConta.btnClose();
      criarConta.buttonContinuar();
      criarConta.validarCadastrado();
      criarConta.bntAcessarConta();
   
    });

  });
  