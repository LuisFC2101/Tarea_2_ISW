console.log("1 al 10");
for(let i =1;i<=10;i++){
    console.log(i);
}
console.log("----------");
console.log("10 al 1");
for(let i =10;i>=1;i--){
    console.log(i);
}
console.log("----------");
console.log("Pares");
for(let i =0;i<=10; i+=2){
    console.log(i);
}
console.log("Impares");
for(let i =1;i<=10; i+=2){
    console.log(i);
}
console.log("----------");
console.log("1 al 10, multiplos de 3");
for(let i =1;i<=10;i++){
    if(i%3==0){
        console.log(i);
    }
}
console.log("----------");
console.log("1 al 10, multiplos de 5");
for(let i =1;i<=10;i++){
    if(i%5==0){
        console.log(i);
    }
}
console.log("----------");
console.log("1 al 10, pero solo los multiplos de 3 y 5");
let multiplo = false;
for(let i =1;i<=10;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
        multiplo = true;
    }
    
}
if(!multiplo){
    console.log("No hay multiplos de 3 y 5");
}
console.log("----------");
console.log("1 al 10, pero solo los multiplos de 3 o 5");
let encontrado = false;

for(let i =1;i<=10;i++){
    if(i%3==0 || i%5==0){
        console.log(i);
        encontrado = true;
    }
}
if(!encontrado){
    console.log("No hay multiplos de 3 o 5");
}



