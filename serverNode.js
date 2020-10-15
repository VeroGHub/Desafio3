// Se carga el módulo de HTTP
var http = require("http");

// Creación del servidor HTTP, y se define la escucha
// de peticiones en el puerto 3000
http.createServer(function(request, response) {

   // Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Se responde, en el cuerpo de la respuesta con el mensaje:
   response.end('Esta es una prueba de servidor node.js de Verito Diaz para el Desafio3!\n');
}).listen(3000);

