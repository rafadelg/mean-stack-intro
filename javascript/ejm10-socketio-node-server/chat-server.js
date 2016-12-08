var app = require('express')();  // dame la función; ejecútala
var http = require('http').Server(app);
var io = require('socket.io')(http);
var sockets = [];
//varias formas
//io.origins('http://localhost:4200 /*1 cliente*/');
//io.origins('http://localhost:4200 http://localhost:3200 /*n-clientes*/');
//si tuviese un contenedor -docker-; me despreocuparía, todos!
//io.origins('*:*');
io.origins('http://localhost:4200'); //app server
io.on('connection',(socket)=>{
    console.log("Cliente conectado!");
    sockets.push(socket);
    //Cuando need hacer algo con el cte, lo embebo aquí
    //'envio-de-mensaje' identified label
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

/*
http -> recibe (rest)
        redirecciona -> socketio

http: send and forget (una sesión por usr), non-polling
Las apps node, por defecto, no controlan info de sesión (ocupación memoria host)
Luego, esta circunstancia hay q considerarla.
    1 usr   - 10 MB
    10 usrs - 100 MB
    100     - 1 GB
    1000    - 10 GB
    ...     - !!!
Eliminación de sesión usr en svr de apps. 

iosockets - resuelven esta problemática
Doc.: http://socket.io/docs/
*/