//8. Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random() para obtener números aleatorios 
//entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
//repitiendo 36.000 veces esta operación.
//Math.random(), for(), push()

let resultados = []

function dados() {
    for (let i = 0; i < 36000; i++) {
        let dado1 = parseInt(Math.random() * 6) + 1;
        let dado2 = parseInt(Math.random() * 6) + 1;
        let dados = dado1 + dado2;
        resultados.push(dados)
    }

console.log(resultados)

}

dados()


// let resultado = [];
// for (let i = 2; i < 13; i++) {
//   resultado.push({ suma: i, veces: 0 }); 
// }
// for (let i = 0; i < 36000; i++) {
//   let dado1 = parseInt(Math.random() * 6) + 1;
//   let dado2 = parseInt(Math.random() * 6) + 1;  
//   let dados = dado1 + dado2;

//   for (let j = 0; j < resultado.length; j++) {
//     if (dados === resultado[j].suma) {           
//       resultado[j].veces += 1;
//     }
//   }
// }
// console.log(resultado);