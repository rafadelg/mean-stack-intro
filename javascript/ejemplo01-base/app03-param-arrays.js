console.log("REFERENCIAS-PASO DE PARÁMETROS");
pruebaDeArgumentos();
pruebaDeArgumentos(1);
pruebaDeArgumentos("hola",7,25,"otro",new Date());
console.log("\nInicio de ejemplos JS con Arrays");
testConArrays();
console.log("Adios mundo cruel!");

function pruebaDeArgumentos(argumento1){
    console.log("Numero de parametros enviados " + arguments.length);
    console.log("Numero de argumentos esperado " + arguments.callee.length);
    for(let i=0;i < arguments.length;i++){
        console.log("Posicion : " + i +" valor : " +arguments[i]);
    }
};
function testConArrays(){
    let mi_array = new Array();
    mi_array[0]=7;
    mi_array[1]="valor";
    mi_array[mi_array.length-1];
    console.log(mi_array[0]);
    console.log(mi_array[mi_array.length-1]);
    let mi_otro_array = [];
    let otro =  ["uno",2,new Date()];
    // Arrays asociativos
    let array_asociativo = new Array();
    array_asociativo['uno'] = 1;
    console.log(array_asociativo['uno']);
    let persona = new Array();
    persona.nombre = "Ruben";
    persona.apellido1 = "Gomez";

    persona.pruebaDeArgumentos = pruebaDeArgumentos;
    console.log(persona.pruebaDeArgumentos);
    persona.pruebaDeArgumentos();

    console.log("Nombre completo = " + persona.nombre  +" " +persona.apellido1)     
};