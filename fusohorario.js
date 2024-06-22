// cria referência ao form e elemento onde será exibida a resposta 
const form = document.querySelector('form');
const resp = document.querySelector('h3');

// "ouvinte" de evento, acionado quando o botão submit for clicado
form.addEventListener('submit', (e) => {
  e.preventDefault();
// obtém e converte o conteúdo do campo inBrasil
  const horaBrasil =  Number(form.inHoraBrasil.value);
  let horaFrança = horaBrasil + 5   // calcula o horário da frança
  if(horaFrança > 24) {            // se passar das 24 horas na frança
    horaFrança = horaFrança - 24;      // ...subtrai 24
  };
  // exibe a resposta (altera o conteúdo do elemento h3 da págia)
  resp.innerText = 'Hora na França ' + horaFrança.toFixed(2);
});