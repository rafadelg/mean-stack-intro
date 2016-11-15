let directorio = process.arg[2]; // path del directorio
let extesion = process.argv[3];  // extension al buscar
const moduloDeFiltrado = require("./ejm05-listar-files-module.js");
                                 // emula un módulo
function queHacerCdoDevuelvaLosFicheros (error, arrayDeFiles){
    if (error){
        console.error("ERROR al listar - \n", error);
    }
    else{
        ficheros.forEach((fichero)=>{
            console.log(fichero);
        });
    }
}
function arrayDeFiles(){

}
moduloDeFiltrado(directorio, extension, queHacerCdoDevuelvaLosFicheros);