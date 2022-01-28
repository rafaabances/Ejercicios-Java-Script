//11. Dado el siguiente objeto, muestra en consola una string con el nombre y apellido.


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



console.log(mentor.nombre, mentor.apellido)

let profe = mentor.nombre + " " + mentor.apellido;

console.log(profe)

console.log(`este es el nombre ${mentor.nombre } y este es el apellido ${mentor.apellido }`)