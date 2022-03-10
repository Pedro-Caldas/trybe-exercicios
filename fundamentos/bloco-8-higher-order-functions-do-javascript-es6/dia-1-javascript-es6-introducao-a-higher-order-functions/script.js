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

// const verifyDraw = (out, picked) => out === picked;

// const drawFunction = (number, verifyDraw) => {
//   const draw = (Math.floor(Math.random() * 5) + 1);
//   return verifyDraw(draw, number) ? 'Parabéns você ganhou' : 'Tente novamente';
// }

// console.log(drawFunction(4, verifyDraw));

// Ex .3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (x, y) => {
  if (x === y) {
    return 1;
  } if (y === 'N.A') {
    return 0;
  } else {
    return -0.5;
  }
}

const grade = (x, y, func) => {
  let points = 0;
  for (let i = 0; i < x.length; i += 1) {
    points += func(x[i], y[i])
  }
  return points
}

console.log(grade(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));