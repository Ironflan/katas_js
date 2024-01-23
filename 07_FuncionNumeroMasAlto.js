// Completa la función que tomando dos números como argumento devuelva el más alto.

let numberOne = 10;
let numberTwo = 20;

function sum(numberOne , numberTwo) {
return Math.max(numberOne, numberTwo)
}

console.log(sum(numberOne, numberTwo));

//! OTRA SOLUCIÓN

function sum(numberOne , numberTwo) {
return numberOne > numberTwo ? numberOne : numberTwo;
}

let maximo = sum(10, 20)

console.log(maximo);
