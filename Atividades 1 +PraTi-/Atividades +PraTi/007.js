// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let maca = parseInt(prompt("Digite o numero de maçãs:"))

if (maca >= 12){
    console.log( maca, "maçãs custam R$"+ maca* 0.25 )
} else {
    console.log ( maca, "maçãs custam R$"+ maca* 0.30 )
}