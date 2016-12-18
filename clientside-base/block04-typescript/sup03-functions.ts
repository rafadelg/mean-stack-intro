//declaración de variables II: diferencias entre let y var
//la diferencia radica en el alcance de las variables
console.log("let -> permite declarar variables limitando su alcance al: bloque, declaración o expresión donde se está usando.");
console.log("var -> defie una variable global o local en una función o bloque sin importar el ámbito del bloque.");

var a = 7;
var b = 12;
console.log("Valor de b: " + b);
if (a === 7){
    let a = 4; // el valor de a es 4 sólo en este bloque
    //var b = 1;
    b = 1
    console.log("Dentro del if: " + a + " - " + b);
}
console.log("Fuera del if: " + a + " - " + b);

//function devuelveNumero(numero: number){
function devuelveNumero(numero: number): string{
    //return (numero);
    return ("Número devuelto: " + numero);
}
console.log(devuelveNumero(34));
alert(devuelveNumero(43));

//function devuelveString(texto: string): number{
function devuelveString(texto: string): boolean{
    let num: boolean;
    if (texto == "hola"){
        num = true //66;
    }else{
        num = false //90;
    }
    return num;
}
console.log(devuelveString("holaa"));
alert(devuelveString("hola"));
