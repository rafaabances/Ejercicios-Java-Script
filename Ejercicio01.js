//1. Compara tu edad (o una cualquiera) con la de Fernando. 
//muestra en consola si eres menor, mayor o tienes la misma edad que él.
//if()


//1º Forma Prompt

// const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
// let edadFernando = 57;
// if(edadDelUsuario >= edadFernando){
//     alert("Eres mayor que  Fernando");
// }else{
//     alert("Eres menor que Fernando");
// }


//2º Forma

// let edadFer = 57;
// // let otraEdad = 0;

// function edad(otraEdad) {

//     if (edadFer > otraEdad) {
//         console.log("Fernando es mayor que la edad");
//     } else if (edadFer == otraEdad) {
//         console.log("Fernando y la otra edad coinciden");
//     } else {
//         console.log("La otra edad es mayor que Fernando");
//     }
// };

// edad(25);
// edad(57);
// edad(60)

//3º Forma


// let edadFer = 57; no hace falta
// let otraEdad = 0;

// function edad(otraEdad,edadF) {

//     if (edadF > otraEdad) {
//         console.log("Fernando es mayor que la edad");
//     } else if (edadF == otraEdad) {
//         console.log("Fernando y la otra edad coinciden");
//     } else {
//         console.log("La otra edad es mayor que Fernando");
//     }
// };

// edad(25,57);
// edad(57,57);
// edad(60,57)


//4º Forma

let edadFer = 57;
// let otraEdad = 0;

function edad(otraEdad,edad2) {

    if (edad2> otraEdad) {
        console.log("Fernando es mayor que la edad");
    } else if (edad2 == otraEdad) {
        console.log("Fernando y la otra edad coinciden");
    } else {
        console.log("La otra edad es mayor que Fernando");
    }
};

edad(25,57);
edad(57,57);
edad(60,edadFer)