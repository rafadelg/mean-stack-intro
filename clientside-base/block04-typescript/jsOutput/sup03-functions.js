console.log("let -> permite declarar variables limitando su alcance al: bloque, declaración o expresión donde se está usando.");
console.log("var -> defie una variable global o local en una función o bloque sin importar el ámbito del bloque.");
var a = 7;
var b = 12;
console.log("Valor de b: " + b);
if (a === 7) {
    let a = 4;
    b = 1;
    console.log("Dentro del if: " + a + " - " + b);
}
console.log("Fuera del if: " + a + " - " + b);
function devuelveNumero(numero) {
    return ("Número devuelto: " + numero);
}
console.log(devuelveNumero(34));
alert(devuelveNumero(43));
function devuelveString(texto) {
    let num;
    if (texto == "hola") {
        num = true;
    }
    else {
        num = false;
    }
    return num;
}
console.log(devuelveString("holaa"));
alert(devuelveString("hola"));
//# sourceMappingURL=sup03-functions.js.map