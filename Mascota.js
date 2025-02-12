const fs = require('fs'); // Módulo para manejar archivos

class Mascota {
    constructor(nombre, especie, edad, dueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.dueño = dueño;
    }

    cumplirAños() {
        this.edad += 1;
    }
}

// Crear una lista de mascotas
const mascotas = [
    new Mascota("Firulais", "Perro", 3, "Juan Pérez"),
    new Mascota("Michi", "Gato", 2, "María Gómez"),
    new Mascota("Nemo", "Pez", 1, "Carlos López"),
    new Mascota("Rocky", "Hamster", 1, "Ana Martínez"),
    new Mascota("Luna", "Conejo", 4, "Luis Ramírez"),
];

// Hacer que algunas mascotas cumplan años
mascotas[0].cumplirAños(); // Firulais cumple años
mascotas[2].cumplirAños(); // Nemo cumple años

// Guardar las mascotas en un archivo JSON
fs.writeFileSync("mascotas.json", JSON.stringify(mascotas, null, 2));

console.log("Mascotas guardadas en mascotas.json");
