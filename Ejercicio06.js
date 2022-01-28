//6. Utilizando la array anterior, encontrar los números que se repiten, guardarlos en una array (si aun no existen en esta) 
//y mostrarlos en consola
//for(), if(), push(), includes() || indexOf()

let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 2, 94, 28, 51, 31,
    29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43
];


function guardarRepes(array) {
    let repetidos = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((array[i] == array[j]) && (i != j ) && (repetidos.includes(array[i]) == false)) {
                repetidos.push(array[i]);
            }
        }
    }
    console.log(repetidos);
}

guardarRepes(numeros)