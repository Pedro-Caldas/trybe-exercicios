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

// let array = ["pedra", "papel", "tesoura"];

// let player1 = array[Math.floor(Math.random()*array.length)]
// let player2 = array[Math.floor(Math.random()*array.length)]


// console.log(player1)
// console.log(player2)


// if (player1 === "pedra") {
//     if (player2 === "pedra") {
//         console.log("Tie");
//     } else if (player2 === "papel") {
//         console.log("Player 2 won");
//         } else {
//             console.log("Player 1 won");
//         }
//     } else if (player1 === "papel") {
//         if (player2 === "pedra") {
//             console.log("Player 1 won");
//         } else if (player2 === "papel") {
//             console.log("Tie")
//         } else {
//             console.log("Player 2 won");
//         }
//     } else {
//         if (player2 === "pedra") {
//             console.log("Player 2 won");
//         } else if (player2 === "papel") {
//             console.log("Player 1 won");
//         } else {
//             console.log("Tie")
//         }
//     }

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

// let idade = 13;

// let maiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade";

// console.log(maiorDeIdade);

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let carolzita = 40;
let murilo = 15;
let baeta = 25;

if (carolzita <= murilo && carolzita <= baeta) {
    console.log("Carolzita é a mais nova.");
} else if (murilo <= carolzita && murilo <= baeta) {
    console.log("Murilo é o mais novo.");
} else {
    console.log("Baeta é a mais nova.");
}