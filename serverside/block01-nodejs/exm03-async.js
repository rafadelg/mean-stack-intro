const fs = require('fs');
let fichero = process.argv[3];
fs.readFile(fichero, miFuncionAsincrona);
function miFuncionAsincrona(error,contenido){
  if (! error) {
    let numDeFilas = contenido.toString().split('\n').length;
    console.log("Fichero: " + fichero + "\nLineas: " + numDeFilas);
  }
  else {
    console.log("ERROR: ");
    errorMsg = "Error al ejecutar la función asíncrona";
    console.error(errorMsg, error);
  }
}