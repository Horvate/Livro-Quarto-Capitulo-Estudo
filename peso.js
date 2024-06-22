// cria referencia ao form e elemento onde será exibida a resposta

const form = document.querySelector('form');
const resp = document.querySelector('h3');

// "ouvinte" de evento, acionado quando o botão submit for clicado

form.addEventListener('submit', (e) => {
e.preventDefault();                          // evita o envio do form
  
   const nome = form.inNome.value;           // obtém valores do form
  const masculino = form.inMasculino.checked;
  const altura = Number(form.inAltura.value);

  let peso                     // declara a variavel peso
  if(masculino) {              // se masculino(ou, if masculino == true)
    peso = 22 * Math.pow(altura, 2)   // Math.pow eleva ao quadrado
    } else {
    peso = 21 * Math.pow(altura, 2)
    }

  // apresenta a resposta (alterar o conteúdo do elemento h3 da página)

  resp.innerText = '${nome} Seu peso ideal é ${peso.toFixed(3)} kg'
});

form.addEventListener('reset', () => {
  resp.innerHTML = ""
})

: Seu peso ideal é: " + peso.toFixed(3) + 'kg