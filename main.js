const palavra = document.querySelector('#palavra');
const btn = document.querySelector('#btn');
const mostra = document.querySelector('#mostra_resultado');
btn.addEventListener('click', (e) => {
  e.preventDefault();
  var inverter='';
  for(var i = 0; i < palavra.value.length; i++){
    inverter=  inverter + palavra.value[palavra.value.length - (i+1)];
  }
  mostra.removeAttribute("hidden");
  mostra.innerHTML = inverter;
}
);