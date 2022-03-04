// PART 1

// Ex. 1

// - Original Code - 

// function testingScope(escopo) {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);

// --

// - Refactored Code - 

// const testingScope = (escopo) => {
//     if (escopo === true) {
//       var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//       console.log(ifScope);
//     } else {
//       var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
//     console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
//   }

//   testingScope(true);


// Ex. 2

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sorter = array => {
//     const sortedArray = array.sort((a, b) => a - b)
//     return sortedArray
// }

// console.log(sorter(oddsAndEvens)); // será necessário alterar essa linha



// PART 2

// Ex. 1

// const fatorial = number => {
//     let fat = 1;
//     for (let i = 1; i <= number; i += 1) {
//         fat = fat * i;
//     }
//     return fat
// }

// console.log(fatorial(4))

// Ex. 2

// const returnLongest = string => {
//     array = string.split(' ');
//     let longest = '';
//     for (let i = 0; i < array.length; i += 1) {
//         longest = (longest.length > array[i].length) ? longest = longest : longest = array[i];
//     }
//     return longest
// }

// console.log(returnLongest('Antônio foi no banheiro e não sabemos o que aconteceu'))

// Ex. 3

// const btn = document.getElementById('btn');
// let counter = document.getElementById('counter');

// btn.addEventListener('click', () => counter.innerHTML = parseInt(counter.innerHTML) + 1)

// Ex. 4

const tryberAqui = (string) => {
    const phrase = 'Tryber x aqui!';
    let newPhrase;
    for (i in phrase) {
        if (phrase[i] == 'x') {
            newPhrase = `Tryber ${string} aqui!`;
        }
    }
    return newPhrase
}

let skills = ['JavaScript', 'HTML', 'Python', 'CSS', 'Git'];

const tryberSkills = () => {
    string = tryberAqui('Bebeto')
    let sortedSkills = skills.sort();
    let editedSkills = [];
    for (let i = 0; i < sortedSkills.length; i += 1) {
        if (i != (sortedSkills.length - 1)) {
            editedSkills.push(` ${skills[i]}`)
        } else {
            editedSkills.push(` ${skills[i]}; ... #goTrybe`)
        }
    }
    return `${string} Minhas cinco principais habilidades são:
    ${editedSkills}`
}

console.log(tryberSkills())