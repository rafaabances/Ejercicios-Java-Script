//13. Dado el objeto anterior, añade las edades a las mascotas. Luego muestra cada una de las mascotas en consola por separado

let mentor = {
    nombre: "Lluís",
    apellido: "Garcia",
    edad: 27,
    poblacion: "Sallent",
    empresa: "Let's Coder",
    hobbies: ["futbol", "codigo", "videojuegos"],
    mascotas: [{
        nombre: "Tuca",
        tipo: "perro",
        sexo: "hembra"
    },
    {
        nombre: "Tam",
        tipo: "perro",
        sexo: "macho"
    }]
};

let edadTuca = 4;
let edadTam = 2;

mentor.mascotas[0].edad = edadTuca
mentor.mascotas[1].edad = edadTam
console.log(mentor.mascotas)




// console.log(mentor.mascotas[0].edad)
// console.log(mentor.mascotas[0].edad,mentor.mascotas[1].edad)

