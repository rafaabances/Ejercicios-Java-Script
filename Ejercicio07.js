//7. Utilizando la array anterior, elimina los numeros pares
//for(), if(), %, splice()



let numeros = [45, 2, 35, 12, 32, 45, 90, 12, 67, 87, 1, 46, 97, 49, 72, 17, 34, 
    2, 94, 28, 51, 31, 29, 18, 62, 2, 4, 13, 4, 98, 15, 75, 12, 43];

 //explicar vueltas con array pequeña.
 

    // let pares = [];
    // let impares = [];
    
    // function eliminarPares() {
    //     for(let i= 0;i<numeros.length;i++){

    //         if(numeros[i] % 2 ==0){
    //             numeros.splice(i,1); // i = 
    //             i = i-1 //
    //             console.log(numeros[i]); // sacará la la array sion los pares.
    //         }
          
    //     }
    // }
    
    
    function eliminarPares(tomate) {
        for(let i= 0;i<tomate.length;i++){

            if(tomate[i] % 2 ==0){
                tomate.splice(i,1); //
                i = i-1 // 
                console.log(tomate[i]); // 
            }
  
        }
    }

    eliminarPares(numeros)

 

    





