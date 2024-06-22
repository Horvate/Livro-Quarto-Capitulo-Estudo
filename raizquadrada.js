const form = document.querySelector('form');    // obtém os elementos da página
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
  e.preventDefault();                       // evita o envio do form

  const numero = Number(form.inNumero.value); // obtém número digitado no form
  const raiz = Math.sqrt(numero);             // calcula raiz quadrada do número
  if (Number.isInteger(raiz)) {               // se valor da raiz for numero inteiro
    resp.innerText = 'Raiz: ' + raiz;         // ...mostra a raiz
  } else {                                    // senão,
    resp.innerText = 'Não há raiz exata para esse número ' + numero; // mostra mensagem
  }
})