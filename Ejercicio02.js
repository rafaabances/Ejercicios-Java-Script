var numero = prompt("Introduce un número entero");
        
        var resultado = parImpar(numero);
        alert("El número "+numero+" es "+resultado);
        
        function parImpar(numero) {
          if(numero % 2 == 0) {
              console.log("Es par");
            return "par";
          }
          else {
            console.log("Es impar");
            return "impar";
          }
        };

        // parImpar(numero)