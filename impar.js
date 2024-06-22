const form = document.querySelector('form'); 
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numero = Number(form.inNumero.value);

  const resultado = (numero % 2 === 0) ? numero + ' é par' :  numero + ' é impar';

  resp.innerText = resultado
});



// if(numero % 2 === 0){
  // resp.innerText = numero + " é par"

// } else {
  // resp.innerText = numero + " é impar"
// }