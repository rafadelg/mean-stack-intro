const fs = require('fs');
let path = require("path");
let directorio = process.arg[2];  // nombre/ruta del directorio
let extesion = process.argv[3];   // extensión a buscar
fs.readDir(directorio, operarConResultado); // 1º leo directorio
// 1º check indicaciones como usar el comando
if (process.argv.length <4){
  console.log("USAGE: poner argumtos.");
  return 1;  
}
function operarConResultado(error, files){  // 2º filtro su contenido
  if (! error) {
    ficheros.forEach(operacionPorFile);
    return 0;
  }
  else {
    console.log("ERROR: ");
    errorMsg = "Error al ejecutar la función asíncrona";
    console.error(errorMsg, error);
    return 2;
  }
}
function operacionPorFile(fichero){         // 3º opero/proceso
  console.log("Forma A: funciones normales");
  if (path.extname(fichero) == extension){
    console.log("Fichero normal: " + fichero);
  }
}
// otra forma (lo mismo: con funciones "landa"????????
fs.readDir(directorio, (error, ficheros) => {
  if (error) {
    console.error ("ERROR - \n", error);
    // return 2; 
  }
  else{
    ficheros.forEach(
      (fichero)=> {
          console.log("Forma B: funciones LAMBDA");
          if (path.extname(fichero) == extesion) {
            console.log("Fichero Lambda: " + fichero);
          }
      });
  }
});
// EJECUCIÓN (command line): $ node ejm04-listar-ficheros.js . .js

/*
    TODO: recordar -en JS- finalización resultados 
    RECORDAR: cómo funciona Ajax

    Esta e la forma de trabajar, respetando el asincronismo. Es decir, debemos evitar que cualquier
    recurso/petición/usuario/etc quede detenido (bloqueado) 

    SIMILITUD: función que procese los datos de entrada, con: discrimación, parseo, ....

*/
