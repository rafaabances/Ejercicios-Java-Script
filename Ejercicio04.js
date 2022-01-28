//4. Dada la array, escribe una función que encuentre el número menor. (No utilizar Math.min())
//for(), if()





let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34,
    2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43
];


function numeroMenor() {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (menor > numeros[i]) {
            menor = numeros[i];
        };
    }
    console.log("El valor mínimo de la lista es:" + " " + menor);

}

numeroMenor();





// let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 
//     2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];
// let min = numeros[0];

// for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] < min) {
//         min = numeros [i]
//     }

// }
// console.log("El valor mínimo de la lista es:" + " " +  min);