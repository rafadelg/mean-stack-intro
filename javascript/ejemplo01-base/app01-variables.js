console.log("Hola mundo!\n");
variablesGlobales = "variableGlobal";
console.log(variablesGlobales);
var variablesGlobalesConVar = "Sigue siendo una variable global"
console.log(variablesGlobalesConVar);
mi_funcion_con_var();
mi_funcion_con_let();
function mi_funcion_con_var(){
    var otraVariable = "Esto es una variable local declarada con var"
    console.log(otraVariable);
    for(var i = 0;i < 10;i++){
        console.log("Valor de i "+i);
    }
    console.log("valor de i al final "+i);
}
function mi_funcion_con_let(){
    let otraVariable = "Esto es una variable local declarada con let"
    console.log(otraVariable);
    for(let i = 0;i < 5;i++){
        console.log("Valor de i "+i);
    }
    //DONE: Buscar una condicion para evaluar si la variable existe
}
if (typeof(otraVariable) != "undefined") { console.log("Existe"); }
else { console.log("La variable NO existe"); }
console.log("\nHasta luego!");
