const fs = require('fs'); // Módulo para manejar archivos

class Factura {
    constructor(id, cliente, productos) {
        this.id = id;
        this.cliente = cliente;
        this.productos = productos;
        this.total = this.calcularTotal();
    }

    calcularTotal() {
        return this.productos.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    calcularIVA() {
        return this.total * 0.16;
    }
}

// Lista de productos para las facturas
const productos1 = [
    { nombre: "Laptop", precio: 1000, cantidad: 1 },
    { nombre: "Mouse", precio: 50, cantidad: 2 }
];

const productos2 = [
    { nombre: "Escritorio", precio: 200, cantidad: 1 },
    { nombre: "Silla", precio: 150, cantidad: 1 }
];

const productos3 = [
    { nombre: "Monitor", precio: 300, cantidad: 1 },
    { nombre: "Teclado", precio: 80, cantidad: 1 }
];

const productos4 = [
    { nombre: "Libro", precio: 25, cantidad: 3 },
    { nombre: "Cuaderno", precio: 10, cantidad: 5 }
];

const productos5 = [
    { nombre: "Teléfono", precio: 500, cantidad: 1 },
    { nombre: "Audífonos", precio: 100, cantidad: 1 }
];

// Crear una lista de facturas
const facturas = [
    new Factura(1, "Juan Pérez", productos1),
    new Factura(2, "María Gómez", productos2),
    new Factura(3, "Carlos López", productos3),
    new Factura(4, "Ana Martínez", productos4),
    new Factura(5, "Luis Ramírez", productos5),
];

// Guardar las facturas en un archivo JSON
fs.writeFileSync("facturas.json", JSON.stringify(facturas, null, 2));

console.log("Facturas guardadas en facturas.json");
