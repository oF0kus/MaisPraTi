// 4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
// calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
// aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
// aprovação).
// 5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
// média calculada seja menor que 6,0

const prompt = require("prompt-sync")();

let nota1 = parseInt(prompt("Digite a primeira nota:"));
let nota2 = parseInt(prompt("Digite a segunda nota:"));
let media = (nota1 + nota2)/2


if (media >= 6) {
    console.log("PARABÉNS! Você foi aprovado com media:", media);
} else if (media < 6) {
    console.log("Você foi REPROVADO! Estude mais, sua media foi:", media);
} else if (isNaN(nota1 || nota2)) {
    console.log("Dados invalidos!");
} else {
    console.log("Dados invalidos!");
}