function holaMundo(nombre:string){
    return "Hola, vamos a comenzar! Soy "+ nombre;
}

var nombre = "Rafael Delgado Casanova";
var resultado = holaMundo(nombre);

console.log(nombre);
console.log(resultado);

var etiqueta = <HTMLElement>document.getElementById("idSection");
etiqueta.innerHTML = resultado;

alert("Hola mundo");