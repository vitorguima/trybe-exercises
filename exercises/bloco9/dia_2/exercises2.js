let almoco = { // O objeto almoco será modificado no decorrer da Promise.
  feijao: 'Cozinhando',
  arroz: 'Cozinhando',
  almocoPronto: false,
};

const chegueiAntesDeFechar = (consegui) => { // Função para simular se houve ou não imprevisto.
  return consegui;
};

const favorParaMae = new Promise((deuCerto, deuErrado) => {  // Por convenção usa-se o nome resolve e reject nos parâmetros.

  if (chegueiAntesDeFechar(true)) { // Troque o true para false para simular um erro e observe o resultado.

    setTimeout(() => { // Utilizaremos o setTimeout para simular alguma requisição demorada, neste caso serão 5 segundos.

      /* return */ deuCerto('Deu certo mãe'); // Note que você "retornou que deuCerto()", mas isso não interrompe o fluxo do código.

      minhaMaeContinuouFazendoOAlmocoETerminou(); // Essa linha e qualquer outra abaixo seria lida porque não houve um return na linha acima.

      // Para interromper o fluxo do código no momento que deu certo, descomente o return dele, isso se chama early-return.
    }, 5000);

  } else {

    setTimeout(() => {
      deuErrado('Deu errado mãe, ocorreu um imprevisto e não vou chegar a tempo');
      minhaMaeContinuouFazendoOAlmocoETerminou();
    }, 5000);

  }

}).then((missaoDadaMissaoCumprida) => { // Esse .then() só será executado caso "deuCerto()".

  return `${missaoDadaMissaoCumprida}, agora a senhora pode ficar tranquila que não pagará juros.`;

}).catch((aconteceuUmImprevisto) => {  // Esse .catch() só será executado caso "deuErrado()" ou se no .then() acima ocorrer algum erro.

  console.error(aconteceuUmImprevisto, ', sinto muito mãe, havia um engarrafamento e não pude chegar a tempo no banco, haverá um juros na conta.');

}).finally(() => { // .finally() sempre será executado, não importa se a Promise foi resolvida ou rejeitada.
  console.table(almoco);
});

const minhaMaeContinuouFazendoOAlmocoETerminou = () => {
  almoco = {
    feijao: 'Pronto',
    arroz: 'Pronto',
    almocoPronto: true,
  };
};

almoco = { // Descomente essa linha e veja que almoco foi modificado enquanto sua Promise estava descobrindo se iria ser resolvida ou rejeitada.
 assincrono: true,
}; 
