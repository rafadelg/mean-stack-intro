const http = require("http");
const url = require("url");

var server = http.createServer(
    (request,response)=>{
        var miUrlAprocesar = url.parse(request.url,true);
        console.log("URL: ",miUrl.path);
        if(/^\/clientes\/[0-9]{3,5}$/.test(request.url)){
            response.writeHead(200,{'content-type':"application/json"});
            response.end(JSON.stringify([{"nombre":"Ruben"}]));
        }else{
            response.writeHead(501);
            response.end();
        }
    }
);

server.listen(8080);
console.log("SServidor escuchando por puerto 8080");

/*
emular restful, json
enrutamiento url/verb [responsabilidad -> Express]
proceso: 1-filtrar 2-procesar

Tratamto códigos http (http state codes)
http.createServer(function(request, response){
              ...
                  ...
                      ...
                          ...
                              ...
Q mas cosas hacer (aquí):

*/
