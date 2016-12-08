//trabajando con namespaces: agrupamto (por servicios indepdtes)

var app = require('express')();  // dame la función; ejecútala
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sockets = [];
io.origins('http://localhost:4200'); //app server

//partitionated by namespaces
var chat = io.of("/chat");
//var service2 = io.of("/service2");
//var service3 = io.of("/service3");
//      ...
chat.on('connection',(socket)=>{
    console.log("Cliente conectado!");
    sockets.push(socket);

    socket.on('envio-de-mensaje',(msg)=>{
        console.log ("Mensaje recibido: " + msg); //client msg.
        msg.user = socket.id;
        if (sockets.length>3){
            sockets[3].emit('mando-un-mensaje',{user:"tu mismo",text:"Solo para ti"});
        }
        //socket.emit('envio-de-mensaje', msg); //emisor
        //chat.emit('envio-de-mensaje', msg); //todos (incluido emisor)
        socket.broadcast.emit('envio-de-mensaje',msg); // todos (salvo emisor)
    });
});

io.on('disconnect',(socket)=>{
    console.log("Cliente desconectado!")

});

http.listen(3000,()=>{
    console.log("Servidor escuchando por puerto 3000");
});