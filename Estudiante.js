// Requiere el módulo 'fs' para escribir en archivos
const fs = require('fs');

// Clase Estudiante
class Estudiante {
  constructor(nombre, edad, carrera, promedio) {
    this.nombre = nombre;
    this.edad = edad;
    this.carrera = carrera;
    this.promedio = promedio;
  }

  // Método para aprobar materia y actualizar el promedio
  aprobarMateria(calificacion) {
    // Nueva fórmula para actualizar el promedio, en este caso, promedia las calificaciones.
    this.promedio = (this.promedio + calificacion) / 2;
  }
}

// Crear 5 objetos de la clase Estudiante
const estudiantes = [
  new Estudiante("Juan", 20, "Ingeniería", 8.5),
  new Estudiante("Ana", 22, "Medicina", 9.2),
  new Estudiante("Carlos", 21, "Arquitectura", 7.8),
  new Estudiante("Maria", 23, "Derecho", 8.9),
  new Estudiante("Luis", 19, "Ciencias de la Computación", 9.5)
];

// Guardar los objetos en un archivo JSON llamado 'estudiantes.json'
fs.writeFileSync('estudiantes.json', JSON.stringify(estudiantes, null, 2));

console.log("Los estudiantes se han guardado correctamente en estudiantes.json.");
