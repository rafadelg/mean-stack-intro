const moduloDeFiltrado = require("./ejm05-listar-files-module.js");
let directorio = process.arg[2]; // path del directorio
let extesion = process.argv[3];  // extension al buscar
                                 // emula un módulo
function queHacerCdoDevuelvaLosFicheros (error, arrayDeFiles){
    if (error){
        console.error("ERROR al listar:\n", error);
    }
    else{
        ficheros.forEach((fichero)=>{
            console.log(fichero);
        });
    }
}
moduloDeFiltrado(directorio, extension, queHacerCdoDevuelvaLosFicheros);