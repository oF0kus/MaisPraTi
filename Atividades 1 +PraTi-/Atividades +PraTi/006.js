// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")()

let a = Number(prompt("Digite o Primeiro lado do Triângulo: "));
let b = Number(prompt("Digite a Segundo lado do Triângulo: "));
let c = Number(prompt("Digite a Terceiro lado do Triângulo: "));

a < b + c && b < a + c && c < a + b;

if (Number(a == b || a == c || b == c)) {
    console.log("É um triângulo isósceles!");
}
else if (Number(a != b && b != c)) {
    console.log("É um triângulo escaleno!");
}
else if (Number(a == b && b == c)) {
    console.log("É um triângulo eqüilátero!");
} else {
    console.log("Valor indefinido!");
}