const http = require('http');
const logica = require('./logica');

const miServidor = http.createServer((peticion, respuesta) => {
    respuesta.writeHead(200, { 'Content-Type': 'application/json' });

    if (peticion.url == '/products' && peticion.method == 'GET') {
        let productos = logica.listarProductos();
        respuesta.end(JSON.stringify(productos));
    }
    else if (peticion.url == '/products' && peticion.method == 'POST') {
        let datos = '';
        peticion.on('data', pedazo => {
            datos += pedazo;
        });
        peticion.on('end', () => {
            let productoNuevo = JSON.parse(datos);
            logica.agregarProducto(productoNuevo.name, productoNuevo.price);
            let productos = logica.listarProductos();
            respuesta.end(JSON.stringify(productos));
        });
    }
    else {
        respuesta.end('{"mensaje":"No encontré eso"}');
    }
});

miServidor.listen(3000);
