const fs = require('fs'); // Módulo para manejar archivos

class Usuario {
    constructor(nombre, email, contraseña) {
        this.nombre = nombre;
        this.email = email;
        this.contraseña = contraseña;
    }

    cambiarContraseña(nuevaContraseña) {
        this.contraseña = nuevaContraseña;
    }
}

// Crear una lista de usuarios
const usuarios = [
    new Usuario("Juan Pérez", "juan@example.com", "clave123"),
    new Usuario("María Gómez", "maria@example.com", "segura456"),
    new Usuario("Carlos López", "carlos@example.com", "pass789"),
    new Usuario("Ana Martínez", "ana@example.com", "qwerty"),
    new Usuario("Luis Ramírez", "luis@example.com", "contraseñaSegura"),
];

// Cambiar la contraseña del primer usuario como ejemplo
usuarios[0].cambiarContraseña("nuevaClave987");

// Guardar los usuarios en un archivo JSON
fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));

console.log("Usuarios guardados en usuarios.json");
