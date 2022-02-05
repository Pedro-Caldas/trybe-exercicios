// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:

// let sum = 0;

// for (let index = 1; index <= 50; index += 1) {
//     sum += index;
// }
// console.log("A soma total de 1 a 50 é: " + sum);

// 2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

// let quantidade = 0;

// for (let index = 2; index <= 150; index += 1) {
//     if (index % 3 == 0) {
//         quantidade += + 1;
//     }
// }
// if (quantidade === 50) {
//     console.log("quarenta e dois");   
// } else {
//     console.log("banana");
// }

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let array = ["pedra", "papel", "tesoura"];

let player1 = array[Math.floor(Math.random()*array.length)]
let player2 = array[Math.floor(Math.random()*array.length)]


console.log(player1)
console.log(player2)


if (player1 === "pedra") {
    if (player2 === "pedra") {
        console.log("Tie");
    } else if (player2 === "papel") {
        console.log("Player 2 won");
        } else {
            console.log("Player 1 won");
        }
    } else if (player1 === "papel") {
        if (player2 === "pedra") {
            console.log("Player 1 won");
        } else if (player2 === "papel") {
            console.log("Tie")
        } else {
            console.log("Player 2 won");
        }
    } else {
        if (player2 === "pedra") {
            console.log("Player 2 won");
        } else if (player2 === "papel") {
            console.log("Player 1 won");
        } else {
            console.log("Tie")
        }
    }