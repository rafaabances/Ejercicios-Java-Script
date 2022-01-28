//9. Haz que el ejercicio anterior pase la array obtenida a la función de este ejercicio. Calcula el promedio de todos los lanzamientos de dados.
//for()



// let resultados = []
// let total = 0;

// function dados() {
//   for (let i = 0; i < 36000; i++) {
//     let dado1 = parseInt(Math.random() * 6) + 1;
//     let dado2 = parseInt(Math.random() * 6) + 1;
//     let dados = dado1 + dado2;
//     resultados.push(dados);  
//   }

//   for (let i = 0; i < 36000; i++) {
//     total += resultados[i];         
//   }
//   console.log(total);
//   let promedioTotal = total / 36000;
//   console.log(promedioTotal);
// }

// dados()



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


function dados2 (pepitas) {
  let total = 0;
  for (let i = 0; i < pepitas.length; i++) {
      total += pepitas[i];
  }
  console.log(total);
  let promedioTotal = total / 36000;
  console.log(promedioTotal);
}
dados2 (resultados)