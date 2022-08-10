const frase = document.querySelector('#frase');
const btnFrase = document.querySelector('#btnFrase');
const mostraQuantidade = document.querySelector('#mostra_resultado_frase');
btnFrase.addEventListener('click', (e) => {
  e.preventDefault();
  let contador = 0;
  for(var i = 0; i < frase.value.length; i++){
    if(frase.value[i] != ' '){
        contador++;
    }
  }
  mostraQuantidade.removeAttribute("hidden");
  mostraQuantidade.textContent = `Quantidade de caracteres, exceto espaço: ${contador}`;
}
);