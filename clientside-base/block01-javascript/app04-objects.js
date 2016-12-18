console.log("POO: OBJETOS EN JS");

var miObjeto = new MiClase("uno","dos");
console.log("EL valor de la clave 1 es "+miObjeto.clave1);
console.log("EL valor de la clave 2 es "+miObjeto.clave2);

function MiClase(campo1, campo2){
    this.clave1 = campo1;
    this.clave2 = campo2;
    
};

MiClase.prototype.miMetodo = function () {
        return this.clave1 + "-" +this.clave2;
};
console.log("Mi objeto tiene : " + miObjeto.miMetodo());

let mi_array_de_prueba = [1,2,3,7,10];

Array.prototype.contiene = function (objeto){
    for(let i = 0; i < this.length ; i++){
        let elementoActual = this[i];
        if(elementoActual == objeto ){
            return true;
        }
    }
    return false;
};
console.log(mi_array_de_prueba.contiene(3));
console.log(mi_array_de_prueba.contiene(11));

/texto a validar/.test("si hay texto a validar entonces true");

let mi_info = [{uno:1,dos:2,tres:{uno:1,dos:2,tres:3}},{uno:1,dos:2,tres:3}];
console.log(mi_info[0].tres.tres);