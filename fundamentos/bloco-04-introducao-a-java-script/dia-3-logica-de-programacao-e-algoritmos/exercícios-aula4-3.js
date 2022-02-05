// Ex. 1

let numero = 3;
let arrayInteiros = [];
let fatorial = 1;

for (let index = 1; index < numero + 1; index += 1) {
    arrayInteiros.push(index);
}

for (let index2 = 0; index2 < arrayInteiros.length; index2 += 1) {
    fatorial = fatorial * arrayInteiros[index2];
}

console.log(fatorial);
