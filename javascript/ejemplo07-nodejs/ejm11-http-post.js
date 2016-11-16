// Diferenciación el uso de verbos
const http = require ("http");
map = require ("through2-map"); // mapear el cuerpo del msg
var server = http.createServer(function(request, response){

    if(request.method !== 'POST'){
        return response.end("Mándamelo por POST"); // 405

    }
    else{ 
        request.pipe(map(function(chunk){
            console.log("Contenido cuerpo: \n" + chunk.toString());
            return chunk.toString().toUpperCase();
        })).pipe(response);
    }


});
server.list("8000");

/*
API NPM: https://www.npmjs.com/package/through2-map
Instalación en local (proyecto): npm install --save (package.json update)

http.createServer([requestListener]): returns a new instance of http.Server.
The requestListener is a function which is automatically added to the 'request' event.

Postam 4.8.3: chrome pluggin

Tratamto códigos http (http state codes)
http.createServer(function(request, response){
              ...
                  ...
                      ...
                          ...
                              ...
*/

