const pessoas = Number(prompt('N° pessoas')); // lê dados de entrada
const peixes = Number(prompt('Nº peixes'));
let pagar                                     // declara variável pagar

if(peixes <= pessoas) {                      // condição definida no exemplo
  pagar = pessoas * 20;
} else {
  pagar = (pessoas * 20) + ((peixes - pessoas) * 12); 
}
console.log('Pagar R$: ' + pagar.toFixed(2));     // exibe o valor a ser pago