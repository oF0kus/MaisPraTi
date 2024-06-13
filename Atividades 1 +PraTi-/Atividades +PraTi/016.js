// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.


let i = 101;
let contador = 0;
let limite = 50;

while (contador <= limite) {
    let primo = true;
    let divisor = 2;
    while (divisor < i) {
        if (i % divisor === 0) {
            primo = false;
            break;
        }
        divisor++;
    }
    if (primo){
        console.log(i);
        contador++;
    }
    i++;
}
