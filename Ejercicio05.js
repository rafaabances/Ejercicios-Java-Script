//5. Utilizando la array anterior, encuentra el número más grande. (No utilizar Math.max())
//for(), if()

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 
    2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

function numeroMayor() {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (mayor < numeros[i]) {
            mayor = numeros[i];
        };
    }
    console.log("El valor mínimo de la lista es:" + " " + mayor);

}

numeroMayor();

// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 
//     2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
// let max = numeros[0];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > max) {
//         max = numeros [i]
//     }

// }
// console.log("El valor mínimo de la lista es:" + max);
