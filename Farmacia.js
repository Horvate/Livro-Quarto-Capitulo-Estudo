const valor = Number(prompt('Valor da Compra R$: '));  // lê valor da compra
const aux = Math.floor(valor / 20);       // aux = n° de parcelas sem condiçôes
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux; // operador ternário
const valorParcelas = valor / parcelas; // cálcular valor da parcela
console.log('Pode pagar em ' + parcelas + 'x de R$: ' + valorParcelas.toFixed(2));