console.log("Objeto Persona");
const persona = {
    nombre: 'Luis',
    edad: 25,
    genero: 'Masculino',
    proPlayer: true,
};
console.log("Nombre:",persona.nombre);
console.log("Edad:",persona.edad);
console.log("Genero:",persona.genero);
console.log("El mejor ProPlayer?",persona.proPlayer);
console.log(persona);

console.log("--------------------");
console.log("Objeto Caja");
const caja = {
    cuadernos: 11,
    lapices: 12,
    papel: 100,
    fotografias: 13,
    enBuenEstado: true
};

console.log("La caja contiene:", caja);

console.log("Cuadernos:", caja.cuadernos, "--> Tipo de dato:", typeof caja.cuadernos);
console.log("Lápices:", caja.lapices, "--> Tipo de dato:", typeof caja.lapices);
console.log("Papel:", caja.papel, "--> Tipo de dato:", typeof caja.papel);
console.log("Fotografías:", caja.fotografias, "--> Tipo de dato:", typeof caja.fotografias);
console.log("En buen estado:", caja.enBuenEstado, "--> Tipo de dato:", typeof caja.enBuenEstado);

