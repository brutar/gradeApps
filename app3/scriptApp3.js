const word = document.querySelector('#word');
const btnWord = document.querySelector('#btnWord');
const mostraWord = document.querySelector('#mostra_resultado_word');
btnWord.addEventListener('click', (e) => {
    e.preventDefault();
    const palavraUpper = (p) =>	p.value[0].toUpperCase() + p.value.substring(1);
    const resultado = palavraUpper(word);
    mostraWord.removeAttribute("hidden");
    
    mostraWord.textContent = resultado;
  }
);