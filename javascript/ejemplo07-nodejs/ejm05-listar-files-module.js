// Creación de módulos: un fichero dependiente de otro
const fs = require('fs');
const path = require('path');

module.exports = function (directorio, extension, callback){ //delegamos la salida final a un 3º
fs.readDir(directorio, (error, ficheros) => {
  if (error) {
    //console.error ("ERROR - \n", error);  ahora, no tiene sentido
    callback(error);  // RECORDAR.. NO BLOQUEAR 
  }
  else{
    // 1º recorremos todos los ficheros: fíltra y añade una condición de filtro
    ficheros = ficheros.filter((fichero) => {
      return path.extname(fichero) === "." + extension; // 2º indicamos la condición de búsqueda
    });
    callback(null, ficheros); // le paso la lista de ficheros para que los procese 
  }
});
/* 
    Ejemplo ilustrativo:

    $ mkdir mi_modulo
    $ cd mi_modulo
    $mi_modulo> npm init

    te genera el siguiente esquema de módulo genérico
    {
      "name": "mi_modulo",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }
*/
