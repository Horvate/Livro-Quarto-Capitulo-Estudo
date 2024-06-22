const form = document.querySelector('form');
const resp1 = document.querySelector('#resp1');
const resp2 = document.querySelector('#resp2');


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const ladoA = Number(form.inLadoA.value);
  const ladoB = Number(form.inLadoB.value);
  const ladoC = Number(form.inLadoC.value);

  if (ladoA == ladoB && ladoB == ladoC) {
    resp1.innerHTML = "Lados podem formar um triângulo"
    resp2.innerHTML = "Tipo: Equalateral"
   
  } else if (ladoA == ladoB && ladoB != ladoC) {
    resp1.innerHTML = "Lados podem formar um triãngulo"
    resp2.innerHTML = "Tipo: Isósceles"
  
  } else if(ladoA != ladoB != ladoC){
    resp1.innerHTML = "Lados podem formar Triângulo"
    resp2.innerHTML = "Tipo: Scalene"
  }
});