// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require("prompt-sync")();

let celsius = parseFloat(prompt("Insira a temperatura em graus celsius:"));
let fahrenheit = (9* celsius/5) + 32 ;

console.log("A temperatura em fahrenheit é:", fahrenheit );

