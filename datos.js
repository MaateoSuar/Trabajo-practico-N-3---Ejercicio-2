let listaProductos = [];

function obtenerProductos() {
    return listaProductos;
}

function guardarProducto(producto) {
    listaProductos.push(producto);
}

module.exports = { obtenerProductos, guardarProducto };
