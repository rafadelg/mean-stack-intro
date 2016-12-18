//ejemplo de funcionamto
var express = require('express');
var app = express();
app.get('/', (req, res) => {
    console.log('Peticion Enviada');
    // Response
});
app.post('/', (req, res) => {
    console.log('Peticion Enviada');
    // Response
});
app.put('/', (req, res) => {
    console.log('Peticion Enviada');
    // Response
});
app.delete('/', (req, res) => {
    console.log('Peticion Enviada');
    // Response
});
app.listen(8080, () => {
    console.log('Servidor Iniciado');
});