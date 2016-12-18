const m = require("mongoose");
m.connect("mongodb://localhost/test");
var libro = require("./ejm04-I-model");

function readBookById(_id){

}
function readAll(){
    
}
function saveBook(_id){
    
}
function updateBook(_id){
    
}
function deleteLibro(_id){
    
}
/*
TODO: into Express
Crear un servicio en Express, usando mongoose, para atender las peticiones REST correspondtes.
Crear las rutas y, luego, cómo pasar la info a mongoose para q haga las operaciones contra la BD

Back-end:
https://docs.mongodb.com/v3.2/crud/
*/