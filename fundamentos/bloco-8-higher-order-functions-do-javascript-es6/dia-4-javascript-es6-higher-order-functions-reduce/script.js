// Ex. 1

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];

//   function flatten(curr, acc) {
//     return acc.concat(curr);
//   }

//   const newArray = arrays.reduce(flatten, []);



// -----



const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:




// Ex. 2

// const sumNames = (acc, curr, index, array) => {
//   if (index === array.length - 1) return `${acc} ${curr.author.name}.`
//   return `${acc} ${curr.author.name}, `;
// }

// const nameString = (arr) => arr.reduce(sumNames, '');

// console.log(nameString(books))




// Ex. 3

// const expectedResult = 43;

// function averageAge(acc, curr, index, array) {
//   let resultado = acc + (curr.releaseYear - curr.author.birthYear) / array.length;
//   return Math.round(resultado);
// }

// const getAvarage = (arr) => arr.reduce(averageAge, 0);





// Ex. 4

// const expectedResult = {
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   genre: 'Fantasia',
//   author: {
//     name: 'George R. R. Martin',
//     birthYear: 1948,
//   },
//   releaseYear: 1991,
// };

// function getLongestNamedBook(acc, curr) {
//   const longestName = curr.name.length > acc.length ? curr : acc
//   return longestName
// }

// const longestNamedBook = (arr) => arr.reduce(getLongestNamedBook, '');




// Ex. 5

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, curr) =>
    acc + curr.split('').reduce((total, item) => {
      if (item === 'a' || item === 'A') return total + 1;
      return total;
    }, 0), 0)
}



