// Exercise with fifteen tasks

// Task  11

const salarioBruto = 3000;
let salarioInss = 0;
let ir = 0;

if (salarioBruto <= 1556.94) {
    salarioInss = (salarioBruto - (salarioBruto * 0.08));
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    salarioInss = (salarioBruto - (salarioBruto * 0.09));
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    salarioInss = (salarioBruto - (salarioBruto * 0.11));
} else {
    salarioInss = (salarioBruto - 570.88)
}

if (salarioInss <= 1903.98) {
    ir = 0
} else if (salarioInss >= 1903.99 && salarioInss <= 2826.65) {
    ir = (salarioInss * 0.075) - 142.80;
} else if (salarioInss >= 2826.66 && salarioInss <= 3751.05) {
    ir = (salarioInss * 0.15) - 354.80; 
} else if (salarioInss >= 3751.06 && salarioInss <= 4664.68) {
    ir = (salarioInss * 0.225) - 636.13;
} else {
    ir = (salarioInss * 0.275) - 869.36;
}

const salarioLiquido = (salarioInss - ir);

console.log(salarioLiquido)