// Exercise with 9 tasks

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Task 1

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index])
// }

// Task 2

// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index]
// }

// console.log(sum)

// Task 3

// let sum = 0;
// let counter = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index];
//     counter = counter + 1;
// }

// let mean = (sum/counter);
// console.log(mean);

// Task 4

// let sum = 0;
// let counter = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sum = sum + numbers[index];
//     counter = counter + 1;
// }

// let mean = (sum/counter);

// if (mean > 20) {
//     console.log("Valor maior que 20");
// } else {
//     console.log("Valor menor que 20")
// }

// Task 5

// let highest = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] > highest) {
//         highest = numbers[index]
//     }
// }

// console.log(highest)

// Task 6

// let odds = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     if ((numbers[index] % 2) != 0 ) {
//         odds = odds + 1;
//     }
// }

// console.log(odds);

// Task 7

// let lowest = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//     if (numbers[index] < lowest) {
//         lowest = numbers[index];
//     }
// }

// console.log(lowest);

// Task 8

// let array = [0];

// for (let index = 1; index < 26; index += 1) {
//     array.push(index);
// }

// console.log(array);

// Task 9

// let resultadoDivisao = [0];

// for (let index2 = 1; index2 < array.length; index2 += 1) {
//     resultadoDivisao.push((array[index2] / 2))
// }

// console.log(resultadoDivisao);



// -------------



// Bonus exercise with 3 tasks

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Task 1

// for (let i = 1; i < numbers.length; i += 1) {
//     for (let j = 0; j < numbers.length; j += 1) {
//         if (numbers[i] < numbers[j]) {
//             position = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = position;
//         }
//     }
// }
// console.log(numbers);

// Task 2

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = 0; j < numbers.length; j += 1) {
        if (numbers[i] > numbers[j]) {
            position = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = position;
        }
    }
}
console.log(numbers);