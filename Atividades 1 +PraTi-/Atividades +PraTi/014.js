// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require("prompt-sync")();

let numero;
let soma = 0;
let media = 0;
let contador = 0;
while (true) {
    numero = parseFloat(prompt("Digite um número: "));
    if (numero === 0) {
        console.log("Calculando...");
        break;
    } else if (isNaN(numero)) {
        console.log("Não é um número!!!");
    } else {
        soma += numero;
        contador++;
    }
}
media = soma / contador;
console.log("A média dos numeros decimais é: ", media) 