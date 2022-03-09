// Ex. 1

// const completeName = (name) => {
//     const nameUnderscored = name.replace(' ', '_').toLowerCase();
//     const obj = {
//         nomeCompleto: name,
//         email: `${nameUnderscored}@trybe.com`
//     }
//     return obj
// }

// console.log(completeName('Pedro Caldas'))

// const newEmployees = () => {
//     const employees = {
//       id1: completeName('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: completeName('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: completeName('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// console.log(newEmployees())

// Ex. 2

const verifyDraw = (out, picked) => out === picked;

const drawFunction = (number, verifyDraw) => {
  const draw = (Math.floor(Math.random() * 5) + 1);
  return verifyDraw(draw, number) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(drawFunction(4, verifyDraw));