//2. Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
//como resultado una string que indica si el número es par o impar. 
//Mostrar por pantalla el resultado devuelto por la función.
//if(), %

// var numero = prompt("Introduce un número entero");

// var resultado = parImpar(numero);
// alert("El número " + numero + " es " + resultado);

// function parImpar(numero) {
//   if (numero % 2 == 0) {
//     console.log("Es par");
//     return "par";
//   } else {
//     console.log("Es impar");
//     return "impar";
//   }
// };

function parImpar(numero) {
  if (numero % 2 != 0) {
    console.log("Es par");
    return "par";
  } else {
    console.log("Es impar");
    return "impar";
  }
};



parImpar(19)

parImpar(20)