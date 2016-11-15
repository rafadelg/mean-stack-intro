//Buffer list para almacenaje de datos para ulterior tratamto/recuperación
const http = require ('http');
const bufferList = require ('bl');
// http.get(options[, callback])
http.get("http://www.google.es", (respuesta)=>{
    // degradación (comunic.); almacenaje en buffer
    response.pipe(
        bufferList((error,data)=>{
            if(error){
                return console.error("Error al procesar la peticion",error);
            }else{
                data = data.toString();
                console.log("Número de caracteres : " + data.length);
                console.log("data:\n" + data);
            }
        })
    );
});

/* 

API de npmjs: https://www.npmjs.com/package/bl

API de Nodejs: https://nodejs.org/dist/latest-v6.x/docs/api/buffer.html

SSOOO (GNU): https://www.gnu.org/software/emacs/manual/html_node/elisp/Buffer-List.html

*/