const datos = require('./datos');

function listarProductos() {
    return datos.obtenerProductos();
}

function agregarProducto(nombre, precio) {
    let producto = {
        id: datos.obtenerProductos().length + 1,
        nombre: nombre,
        precio: precio
    };
    datos.guardarProducto(producto);
}

module.exports = { listarProductos, agregarProducto };
