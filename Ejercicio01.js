// Ej 1

// const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
// let edadFernando = 57;
// if(edadDelUsuario >= edadFernando){
//     alert("Eres mayor que  Fernando");
// }else{
//     alert("Eres menor que Fernando");
// }

let edadFer = 57;
let otraEdad = 0;

function edad(otraEdad) {

    if (edadFer > otraEdad) {
        console.log("Fernando es mayor que la edad");
    } else if (edadFer == otraEdad) {
        console.log("Fernando y la otra edad coinciden");
    } else {
        console.log("La otra edad es mayor que Fernando");
    }
};

edad(25);