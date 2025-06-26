import fetch from 'node-fetch';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let valor = 0;
let moedaOrigem = '';
let moedaDestino = '';

// Pergunta qual o valor para ser convertido
rl.question('Digite o valor que deseja converter: ', (respostaValor) => {
  valor = Number(respostaValor);

  // Pergunta qual a Moeda de origem e transforma em letras maiúsculas
  rl.question('Digite a moeda de origem (ex: USD): ', (respostaOrigem) => {
    moedaOrigem = respostaOrigem.toUpperCase();

    // Pergunta qual a Moeda de destino e transforma em letras maiúsculas
    rl.question('Digite a moeda de destino (ex: BRL): ', (respostaDestino) => {
      moedaDestino = respostaDestino.toUpperCase();

      // Mostra o que irá acontecer
      console.log(`\nConvertendo ${valor} ${moedaOrigem} para ${moedaDestino}...\n`);

      // Função principal
      async function converterMoeda(valor, de, para) {
        try {
          const url = `https://api.frankfurter.app/latest?amount=${valor}&from=${de}&to=${para}`;
          const resposta = await fetch(url);
          const dados = await resposta.json();

          if (dados.rates && dados.rates[para]) {
            const resultado = dados.rates[para];
            console.log(`${valor} ${de} equivalem a ${resultado.toFixed(2)} ${para}`);
          } else {
            console.log('Erro: moedas inválidas ou não suportadas.');
          }
        } catch (erro) {
          console.log('Erro ao acessar a API:', erro.message);
        } finally {
          rl.close();
        }
      }

      converterMoeda(valor, moedaOrigem, moedaDestino);
    });
  });
});
