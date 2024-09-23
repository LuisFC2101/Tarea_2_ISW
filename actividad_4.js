const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

if (numero1 >= numero2 && numero1 >= numero3) {
    console.log("El numero mayor es:", numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
    console.log("El numero mayor es:", numero2);
} else {
    console.log("El numero mayor es:", numero3);
}


if (numero1 < numero2 && numero1 < numero3) {
    console.log("El número menor es:", numero1);
} else if (numero2 < numero1 && numero2 < numero3) {
    console.log("El número menor es:", numero2);
} else {
    console.log("El número menor es:", numero3);
}


if (numero1 % 2 == 0) {
  console.log("El numero",numero1, "es par")
} else {
    console.log("El numero",numero1, "es impar")
}
if (numero2 % 2 == 0) {
  console.log("El numero",numero2, "es par")
} else {
    console.log("El numero",numero2, "es impar")
}
if (numero3 % 2 == 0) {
  console.log("El numero",numero3, "es par")
} else {
    console.log("El numero",numero3, "es impar")
}

if (numero1 % 5 == 0) {
    console.log("El numero",numero1, "es multiplo de 5")
  }else {
      console.log("El numero",numero1, "no es multiplo de 5")
  }
  if (numero2 % 5 == 0) {
    console.log("El numero",numero2, "es multiplo de 5")
  }else {
      console.log("El numero",numero2, "no es multiplo de 5")
  }
  if (numero3 % 5 == 0) {
    console.log("El numero",numero3, "es multiplo de 5")
  }else {
      console.log("El numero",numero3, "no es multiplo de 5")
  }