//12. Dado el objecto anterior, crea una array con todas las keys y luego úsala para mostrar en consola todas las values
//Object.keys(), for()


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

let profe = []

profe = (Object.keys(mentor))



for (let i= 0; i < profe.length; i++) {
   console.log(mentor[profe[i]])
}










