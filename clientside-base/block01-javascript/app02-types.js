console.log("TIPOS DE DATOS");
var toType = function(argumento){
    return Object.prototype.toString.call(argumento).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
}
//FUENTE: Blog etnassoft, http://www.etnassoft.com/2011/08/16/como-obtener-el-tipo-de-datos-preciso-de-una-variable-en-javascript/
var tipoDeDatoNumerico = 7;
var tipoDeDatoCadena = "Siete";
// Referencia 0x23467182
var  fechaDeEstreno = new Date();//2016
// Referencia 0x23467182
var otraFecha = fechaDeEstreno;
//otraFecha.setFullYear(1989);
console.log("Fecha de estreno    " + fechaDeEstreno.getFullYear());
cambiarYear(otraFecha);
cambiarYear("otraFecha");
function cambiarYear(fecha){
    //DONE: Asegurarse que lo que llega es de tipo fecha
    /*
    if (typeof(fecha) == "object") { console.log("Vamos bien"); }
    else { console.log("Vamos mal"); }
    */
    if (toType(fecha)=="date") {
        fecha.setFullYear(2011);
        console.log("Fecha de la funcion " + fecha.getFullYear());
    }
    else { console.log ("El parámetro No es de tipo fecha"); }
};
console.log("Fecha de la funcion " + otraFecha.getFullYear());
console.log("Fecha de estreno    " + fechaDeEstreno.getFullYear());
console.log("\nCheck con typeof");
console.log("Resultado typeOf numerico  " + typeof tipoDeDatoNumerico);
console.log("Resultado typeOf cadena    " + typeof tipoDeDatoCadena);
console.log("Resultado de un new Date() " + typeof fechaDeEstreno);
pruebaNumerico();
function pruebaNumerico(){
    let numero = new Number(3.43543);
    console.log("Valor almacenado " + numero.valueOf());
    console.log("Valor almacenado " + numero.toFixed()); 
    console.log("Valor almacenado " + numero.toFixed(3));
};











