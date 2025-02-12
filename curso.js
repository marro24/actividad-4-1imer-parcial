const fs = require('fs'); // Módulo para manejar archivos

class Curso {
    constructor(nombre, duracion, instructor, costo) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.instructor = instructor;
        this.costo = costo;
        this.estudiantes = []; // Lista de estudiantes inscritos
    }

    inscribirEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }
}

// Crear una lista de cursos
const cursos = [
    new Curso("JavaScript desde Cero", "8 semanas", "Carlos Pérez", 200),
    new Curso("Python para Principiantes", "10 semanas", "Ana Gómez", 250),
    new Curso("Diseño UX/UI", "6 semanas", "María López", 180),
    new Curso("Data Science con Python", "12 semanas", "Luis Ramírez", 300),
    new Curso("Marketing Digital", "5 semanas", "Sofía Fernández", 150),
];

// Inscribir algunos estudiantes como ejemplo
cursos[0].inscribirEstudiante("Juan Pérez");
cursos[0].inscribirEstudiante("María Gómez");
cursos[2].inscribirEstudiante("Carlos López");

// Guardar los cursos en un archivo JSON
fs.writeFileSync("cursos.json", JSON.stringify(cursos, null, 2));

console.log("Cursos guardados en cursos.json");
