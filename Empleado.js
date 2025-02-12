const fs = require('fs'); // Módulo para manejar archivos

class Empleado {
    constructor(nombre, puesto, salario, añosExperiencia) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
        this.añosExperiencia = añosExperiencia;
    }

    calcularBono() {
        return this.salario * 0.10;
    }
}

// Crear una lista de empleados
const empleados = [
    new Empleado("Juan Pérez", "Desarrollador", 3000, 5),
    new Empleado("María Gómez", "Diseñadora UX/UI", 2800, 4),
    new Empleado("Carlos López", "Gerente de Proyecto", 5000, 10),
    new Empleado("Ana Martínez", "Analista de Datos", 3500, 6),
    new Empleado("Luis Ramírez", "Soporte Técnico", 2200, 3),
];

// Guardar los empleados en un archivo JSON
fs.writeFileSync("empleados.json", JSON.stringify(empleados, null, 2));

console.log("Empleados guardados en empleados.json");
