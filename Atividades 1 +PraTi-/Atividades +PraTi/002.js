// Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const prompt = require("prompt-sync")();

let eleitores = parseInt(prompt("Quantidades de eletores: "));
let brancos = parseInt(prompt("Quantidades de brancos: "));
let nulos = parseInt(prompt("Quantidades de nulos: "));
let validos = parseInt(prompt("Quantidades de validos: "));

if (isNaN(eleitores || brancos || nulos || validos)) {
    console.log("Digite apenas números.");
} else if (brancos > eleitores || nulos > eleitores || validos > eleitores) {
    console.log("Os números de eleitores são menores que os votos.");
} else {
    resultado = brancos / eleitores;
    resultado2 = resultado * 100;
    console.log(resultado2 + "% de votos brancos")

    resultado = nulos / eleitores;
    resultado2 = resultado * 100;
    console.log(resultado2 + "% de votos nulos")

    resultado = validos / eleitores;
    resultado2 = resultado * 100;
    console.log(resultado2 + "% de votos validos")
}