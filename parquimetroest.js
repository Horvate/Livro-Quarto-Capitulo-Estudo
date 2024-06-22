const form = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');


form.addEventListener('submit', (e) => {
  e.preventDefault();
const valor = Number(form.inValor.value);

const termpo30 = 1.00;
const tempo60 = 1.75;
const tempo120 = 3.00;

let troco1 = valor - termpo30
let troco2 = valor - tempo60
let troco3 = valor - tempo120


if(valor <= termpo30){
  resp1.innerHTML = 'Tempo 0 min'
  resp2.innerHTML = 'Valor insuficiente.'

} else if(valor < tempo60) {
  
  resp1.innerHTML = 'Tempo 30 min'
  resp2.innerHTML = 'Troco R$: ' + troco1

} else if(valor < tempo120){
  
  resp1.innerHTML = 'Tempo 60 min'
  resp2.innerHTML = 'Troco R$: ' + troco2

} else {
  
  resp1.innerHTML = 'Tempo 120 min'
  resp2.innerHTML = 'Troco R$: ' + troco3
}

  console.log(valor)

})