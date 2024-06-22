const form = document.querySelector('form');
const resp = document.querySelector('h3');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const permitida = Number(form.inPermitida.value);
  const condutor = Number(form.inCondutor.value);
  const excesso = condutor - permitida;
  
  if(excesso <= 0) {
    resp.innerText = 'Sem multa'
  } else if(excesso <= 16 ) { 
    resp.innerText = 'Multa leve'
  } else if(excesso >= 16) {
    resp.innerText = 'Multa grave'
  }
  
  form.addEventListener('reset', (e) => {
    e.preventDefault();
    form.inCondutor.value = '';
    form.inPermitida.value = '';
    resp.innerText = '';
  });
});

