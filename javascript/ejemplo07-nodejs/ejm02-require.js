//Contar el Num de caracteres del fichero
const fs = require('fs');
//let fichero = process.args;
let fichero = process.argv[2];  // sacar la info de los parámtros de entrada para luego procesarlos
//fs.readFileSync(file[, options])
let contenido = fs.readFileSync(fichero);
let numDeFilas = contenido.toString().split('\n').length;
console.log("Fichero: " + fichero + "\nLineas: " + numDeFilas);

/*
Formas de ejecución:
a) Indicando en la consola el archivo a procesar
C:\Users\manana\repo\testing\javascript\ejemplo07-nodejs>node ejm02-require.js "ejm02-require.js"
b) Indicadno el archivo a procesar en launch.json y, concretamte en: 
  "args": [ "ejm02-require.js" ]

API Nodejs: https://nodejs.org/api/fs.html

*/