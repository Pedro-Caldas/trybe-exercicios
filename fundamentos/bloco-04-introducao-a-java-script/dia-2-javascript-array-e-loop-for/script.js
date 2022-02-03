// Exercise with 9 tasks

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

let highest = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highest) {
        highest = numbers[index]
    }
}

console.log(highest)