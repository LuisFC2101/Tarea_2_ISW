console.log("Suma de Arrays");
function sumaArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

console.log("La suma es: ",sumaArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),"\n");

console.log("Promedio de Arrays");
function promedioArray(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma / array.length;
}
console.log("El promedio es: ",promedioArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),"\n");

console.log("Funcion que tome un parametro String y devuelva las letras en mayusculas");
let palabreo = "hola mundo";
function mayusculas(palabra){
    return palabra.toUpperCase();
}
console.log("Frase original: ",palabreo);
console.log("Frase en mayuscula: ",mayusculas(palabreo),"\n");

console.log("Funcion que tome una array de numeros y devuelva los pares");
function pares(array) {
    let pares = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            pares.push(array[i]);
        }
    }
    return pares;
}
console.log("Numeros pares: ",pares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),"\n");
