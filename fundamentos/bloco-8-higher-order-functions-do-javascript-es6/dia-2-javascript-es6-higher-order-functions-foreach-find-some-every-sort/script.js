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





// Ex. 1

//   function authorBornIn1947(arr) {
//     return arr.find((element) => element.author['birthYear'] === 1947)
//   }




// Ex. 2

//   function smallerName(arr) {
//     let nameBook;
//     arr.forEach((book) => {
//         if (!nameBook || book.name.length < nameBook.length) {
//             nameBook = book.name;
//         }
//     })
//     return nameBook;
//   }

//   console.log(smallerName(books));




// Ex. 3

// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };

//   function getNamedBook(arr) {
//     return arr.find((book) =>  (book.name.length === 26))
//   }




// Ex. 4

// const expectedResult = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: { name: 'Stephen King', birthYear: 1947 },
//       releaseYear: 1986,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//   ];

//   function booksOrderedByReleaseYearDesc(arr) {
//     return arr.sort((a, b)  => b.releaseYear - a.releaseYear)
//   }




// Ex. 5

// const expectedResult = false;

// function everyoneWasBornOnSecXX(arr) {
//     return arr.every((element) => {element.releaseYear >= 1900})
// }

// everyoneWasBornOnSecXX(books)

// console.log(everyoneWasBornOnSecXX(books))




// Ex. 6

// const expectedResult = true;

// function someBookWasReleaseOnThe80s(arr) {
//   return arr.some((element) => element.releaseYear >= 1980 && element.releaseYear < 1990 )
// }

// console.log(someBookWasReleaseOnThe80s(books))





// Ex. 7

const expectedResult = false;


// Se nenhum autor nasceu no mesmo ano RETURN TRUE
// Se dois autores nasceram no mesmo ano RETURN FALSE




function authorUnique(arr) {
  let result = true;
  arr.forEach(element => {
    let birthRepetitions = 0;
    arr.forEach((element2) => {
      if (element.author.birthYear === element2.author.birthYear) {
        birthRepetitions += 1;
      }
    })
    if (birthRepetitions > 1) {
      result = false;
    }
  });
  return result;
}

console.log(authorUnique(books));