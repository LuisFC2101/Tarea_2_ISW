console.log("\n");
console.log("La funcion recive un String en minusculas y lo devuelve en mayusculas");
let palabra ="ola jente";
function mayusculas(palabra){
    return palabra.toUpperCase();
}
console.log(palabra);
console.log(mayusculas(palabra));
console.log("\n");

console.log("La funcion recive un String en mayusculas y lo devuelve en minusculas");
let palabra2 ="OLA JENTE";
function minusculas(palabra2){
    return palabra2.toLowerCase();
}
console.log(palabra2);
console.log(minusculas(palabra2));
console.log("\n");

console.log("La funcion recive de parametros 2 numeros y los reste");

function resta(a, b) {
    const resultado = a - b;
    return resultado;
}
console.log(resta(20, 40),"\n");
console.log("La funcion recive de parametros 2 numeros y los divida");

function division(a, b) {
    const resultado = a / b;
    return resultado;
}
console.log(division(20, 40),"\n");

console.log("Crear una función que reciba como parámetro 2 números y los multiplique");
function multi(a, b) {
    const resultado = a * b;
    return resultado;
}
console.log(multi(20, 40),"\n");

console.log("Crear una función que reciba como parámetro un String y devuelva la longitud de ese String");
let palabra3 ="jelou guord";
function longitud(palabra3){
    return palabra3.length;
}
console.log("La longitud del String es de:",longitud(palabra3),"\n");

