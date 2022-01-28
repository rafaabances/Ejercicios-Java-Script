//10. Haz una copia de la array del ejercicio 3, ordenala de forma ascendente, y coloca el siguiente número donde le corresponda.
//Array.from(), sort(), splice(), for(), if()


let numeros2 = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 9,
    4, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43
];

let numeroNuevo = 7;

function ordenaNumeros() {
    numeros2.sort(function (a,b) {
        return a -b  
    })

    
    console.log(numeros2);

    numeros2.splice(5,0,7); // primero en la posición 5 / es si quiero borrar algún numero 
    //( si pones 1, se borra el siguiente a la posición 5 (lo has puesto antes)) / el numero que insertamos.
    console.log(numeros2)
}

ordenaNumeros();