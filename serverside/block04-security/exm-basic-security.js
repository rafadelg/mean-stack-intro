//stand-alone example
const express = require('express');
const passport= require('passport');
const myStrategy = require('passport-http').BasicStrategy;

passport.use(new myStrategy((usr,pwd,done)=>{

    console.log("Username: "+ usr + " Password: " + pwd);
    //autenticación
    if (usr.toLowerCase()=="user" && pwd == "pwd"){
        done(null,true);
    } else done(null,false);
   
}));

var app = express();
app.get("/home", passport.authenticate('basic',{session:false}),(request, response)=>{
    console.log("Acceso permitido");
    response.send("Acceso concedido");
});
let port = 8080;
app.listen(port);
console.log("Listening server port: " + port);
