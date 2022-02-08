// Part 1 - objetcs and for/in

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// Ex. 1

// console.log("Bem-vinda, " + info.personagem);

// Ex. 2

// info.recorrente = "Sim";

// console.log(info);

// Ex. 3

// for (let key in info) {
//     console.log(key);
// }

// Ex. 4

// for (let key in info) {
//     console.log(info[key]);
// }

// Ex. 5

// let info2 = {
//     personagem: "Tio Patinhas",
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim",
// };

// for (let key in info, info2) {
//     if (info[key] != info2[key]) {
//     console.log(info[key] + " e " + info2[key])
//     } else {
//         console.log("Ambos recorrentes");
//     }    
// }

// 

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// Ex. 6

//   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);

// Ex. 7

// leitor.livrosFavoritos.push(
//     {
//         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//         autor: 'JK Rowling',
//         editora: 'Rocco',
//       }
// )

// Ex. 8

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos")


// ----

// Part 2 - functions

// Ex. 1

// Fonte para função de reverter palavra: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// function palindrome(word) {
//     reverseWord = word.split("").reverse().join("");
//     if (reverseWord === word) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindrome("arara"))

// Ex. 2

// function retornaMaiorIndice(numeros) {
//     let maiorIndice = 0;
//     for (let indice in numeros) {
//         if (numeros[maiorIndice] < numeros[indice]) {
//             maiorIndice = indice
//         }
//     }
//     return maiorIndice;
// }
// console.log(retornaMaiorIndice([2, 3, 6, 7, 10, 1]))

// Ex. 3

// function returnLowest(numbers) {
//     let lowestIndex = 0;
//     for (let index in numbers) {
//         if (numbers[lowestIndex] >= numbers[index]) {
//             lowestIndex = index;
//         }
//     }
//     return lowestIndex;
// }
// console.log(returnLowest([2, 4, 6, 7, 10, 0, -3]))

// Ex. 4

// function longestName(names) {
//     let longest = " ";
//     for (let name in names) {
//         if (longest.length < names[name].length) {
//             longest = names[name];
//         }
//     }
//     return longest
// }
// console.log(longestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

// Ex. 5 - INCOMPLETO

// Ex. 6

// function sumOfAll(number) {
//     let counter = [];
//     let sum = 0;
//     for (let i = 1; i <= number; i += 1) {
//         counter.push(i);
//     }
//     for (let j in counter) {
//         sum += counter[j];
//     }
//     return sum
// }
// console.log(sumOfAll(5))

// Ex. 7

// function verifyEndOfWord(word, ending) {

//     let wordReverse = word.split('').reverse().join('');
//     let endingReverse = ending.split('').reverse().join('');
//     let result;

//     for (let i = 0; i < endingReverse.length; i += 1) {
//         if (wordReverse[i] !== endingReverse[i]) {
//             result = false;
//             break;
//         } else {
//             result = true;
//         }
//     }
//     return result;
// }
// console.log(verifyEndOfWord("trybe", "be"));