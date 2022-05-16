const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array. (Referência usada para inserir um comando que verifica se tal objeto é um array: https://www.w3schools.com/jsref/jsref_isarray.asp)
    expect(Array.isArray(productDetails('firstProduct', 'secondProduct'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails()[0,1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si. (Referência para inserir .not para fazer uma comparação oposta: https://www.devmedia.com.br/teste-unitario-com-jest/41234)
    expect(productDetails()[0]).not.toBe(productDetails()[1]);
    // Teste se os dois productIds terminam com 123. (Referência usada para inserir o comando endsWith que verifica se uma string termina com caracteres específicos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
    expect(productDetails()[0,1].details.productId.endsWith('123')).toBe(true);
  });
});
