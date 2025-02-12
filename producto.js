const fs = require('fs'); // Módulo para manejar archivos

class Producto {
    constructor(nombre, precio, categoria, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
    }

    aplicarDescuento(porcentaje) {
        this.precio -= this.precio * (porcentaje / 100);
    }
}

// Crear una lista de productos
const productos = [
    new Producto("Laptop", 1000, "Electrónica", 10),
    new Producto("Teléfono", 500, "Electrónica", 15),
    new Producto("Silla", 200, "Muebles", 8),
    new Producto("Libro", 25, "Educación", 20),
    new Producto("Monitor", 300, "Electrónica", 5),
];

// Aplicar un 10% de descuento a todos los productos
productos.forEach(producto => producto.aplicarDescuento(10));

// Guardar los productos en un archivo JSON
fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));

console.log("Productos guardados en productos.json");
