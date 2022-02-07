// Ex. 1

// let numero = 3;
// let arrayInteiros = [];
// let fatorial = 1;

// for (let index = 1; index < numero + 1; index += 1) {
//     arrayInteiros.push(index);
// }

// for (let index2 = 0; index2 < arrayInteiros.length; index2 += 1) {
//     fatorial = fatorial * arrayInteiros[index2];
// }

// console.log(fatorial);

// Ex. 2

// let word = "pedro";
// let backWord = " ";

// for (let index = word.length - 1; index >= 0; index -= 1){
//     backWord = backWord + word[index];
// }

// console.log(backWord);

// Ex. 3

// a)

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let highest = "";

// for (let index = 0; index < array.length - 1; index += 1) {
//     if (array[index].length > array[index + 1].length && array[index].length > highest.length) {
//         highest = array[index];
//     }
// }

// console.log(highest);

// b)

// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let lowest = "///";

// for (let index = 0; index < array.length - 1; index += 1) {
//     if (array[index].length < array[index + 1].length && array[index].length <= lowest.length) {
//         lowest = array[index];
//     } else if (array[index + 1].length < array[index].length && array[index + 1].length <= lowest.length) {
//         lowest = array[index + 1]
//     }
// }

// console.log(lowest);

// Ex. 4

// let highestPrime = 0;
// let currentNumber = 0;

// for (currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
//     let isPrime = true;
//     for (let divisor = 2; divisor < currentNumber; divisor += 1) {
//         if (currentNumber % divisor === 0) {
//             isPrime = false;
//         }
//     }
//     if (isPrime) {
//         highestPrime = currentNumber;
//     }
// }
// console.log(highestPrime);

// --

// Bônus

// Ex. 1

// let n = 5;
// let dot = "*";
// let form = "";


// for (let index = 0; index < n; index += 1) {
//     form += dot.repeat(n) + "\n";
// }
// console.log(form);

// Ex. 2

// let n = 5;
// let dot = "*";
// let form = "";


// for (let index = 1; index <= n; index += 1) {
//     form += dot.repeat(index) + "\n";
// }
// console.log(form);

// Ex. 3

// let n = 5;
// let dot = "*";
// let blank = " ";
// let form = "";


// for (let index = 1; index <= n; index += 1) {
//     form += (blank.repeat(n - index)) + (dot.repeat(index)) + "\n";
// }
// console.log(form);

// Ex. 4

// let n = 5;
// let dot = "*";
// let blank = " ";
// let form = "";


// for (let index = 1; index <= n; index += 2) {
//     form += (blank.repeat(n - index/2)) + (dot.repeat(index)) + (blank.repeat(n - index)) + "\n";
// }
// console.log(form);

// Ex. 5 - 

// Ex. 6

let n = 41;
let nDivisores = 0;

for (let divisor = 1; divisor <= n; divisor += 1) {
    if (n % divisor === 0){
        nDivisores += 1;
    }
}

if (nDivisores > 2) {
    console.log(n + " não é primo!");
} else {
    console.log(n + " é primo!");
}