// Part 1 - 8 exercises

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