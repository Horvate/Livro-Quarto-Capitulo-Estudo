const form = document.querySelector('form');
const resp1 = document.querySelector('resp1');
const resp2 = document.querySelector('resp2');


form.addEventListener('submit', (e) => {
  e.preventDefault()
const valor = Number(form.inValor.value);

const termpo30 = 1.00;
const tempo60 = 1.75;
const tempo120 = 3.00;


if(valor <= termpo30){
  resp2.innerText = 'Valor insuficiente.'
}
console.log(valor)
})
