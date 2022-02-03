// Exercise with fifteen tasks

// Task  10

const custoInicial = 100;
const valorVenda = 200;
const custoFinal = (custoInicial + (custoInicial*0.2));
const lucro = (valorVenda - custoFinal);

if (custoInicial >= 0 && valorVenda >= 0) {
    console.log(lucro * 1000)
} else {
    console.log("values not valid")
}