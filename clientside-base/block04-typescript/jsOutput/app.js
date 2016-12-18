let variable = 2018;
var otraVariable = 7;
otraVariable = 14;
var miCumpleanios = { dia: 3, mes: 11, anio: 1978 };
console.log("El dia de mi cumple es : " + miCumpleanios.dia);
console.log("Antes de cumplir años : " + miCumpleanios.anio);
cumplirAnios(miCumpleanios);
console.log("Despues de cumplir años : " + miCumpleanios.anio);
function cumplirAnios(fechaDeCumpleanios) {
    fechaDeCumpleanios.anio++;
}
class Persona {
    constructor(nombre, apellido1, apellido2) {
        this.nombre = nombre;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }
    stringify() {
        return this.nombre + " " + this.apellido1 + " " + this.apellido2;
    }
}
let ruben = new Persona("Ruben", "Gomez", "Garcia");
let luis = new Persona("Luis", "Perez", "Garcia");
let alberto = new Persona("Alberto", "Gomez", "Gonzalez");
console.log(ruben.stringify());
console.log(luis.stringify());
console.log(alberto.stringify());
class Ciudadano extends Persona {
    constructor(nombre, apellido1, apellido2, identidad) {
        super(nombre, apellido1, apellido2);
        this.identidad = identidad;
    }
    stringify() {
        return super.stringify() + " " + this.identidad;
    }
}
var ciudadanoKane = new Ciudadano("Ruben", "Gomez", "Garcia", "1");
console.log(ciudadanoKane.stringify());
var otraPersona = ciudadanoKane;
console.log(otraPersona.stringify());
class SerVivo {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        SerVivo.totalDeSeresVivos += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
SerVivo.totalDeSeresVivos = 0;
let pez = new SerVivo("marino");
let pez2 = new SerVivo("marino");
let pez3 = new SerVivo("marino");
let tigre = new SerVivo("terrestre");
let leon = new SerVivo("terrestre");
console.log("Total de seres vivos = " + SerVivo.totalDeSeresVivos);
class Padre {
    dameElAlmacenProtegido() {
        return this.almacenProtegido;
    }
}
let padre = new Padre();
padre.almacenPublico = 77;
class HijoDePadre extends Padre {
    constructor(otroValor) {
        super();
        this.almacenPublico = 33;
        this.almacenProtegido = otroValor;
    }
}
let hijoDePadre = new HijoDePadre(22);
let hijoDePadre2 = new HijoDePadre(23);
hijoDePadre.almacenPublico;
hijoDePadre.dameElAlmacenProtegido();
class Ser {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
Ser.totalDeSeres = 0;
class Politico extends Ser {
    constructor() {
        super("cucaracha");
    }
    desplazamiento() {
        return "En coche oficial";
    }
    alimentarse() {
        return "Dame dinero en sobres!";
    }
}
let politico = new Politico();
class MiClaseAbstracta {
}
class SerDos {
    constructor(clasificacion) {
        this.clasificacion = clasificacion;
        Ser.totalDeSeres += 1;
        if (!SerDos.instance) {
            SerDos.instance = this;
        }
        return SerDos.instance;
    }
    stringify() {
        return "Clasificacion: " + this.clasificacion;
    }
}
SerDos.totalDeSeres = 0;
let otra = "otra";
let funcionAnonimaClasica = function (uno, dos) {
    return uno + dos;
};
let funcionLambda = (uno, dos) => {
    return uno + dos;
};
console.log("Resultado de sumar 1 y 3 : " + funcionLambda(1, 3));
const PI = 3.141592654;
let { variable1, variable2 } = { variable1: "valor1", variable2: "valor2" };
console.log(variable1);
console.log(variable2);
dameLosCamposPorConsola("uno", 2, "tres", "cuatro", 5, "seis");
function dameLosCamposPorConsola(campo1, campo2, ...elRestoDeCampos) {
    console.log(campo1);
    console.log(campo2);
    console.log(elRestoDeCampos);
    console.log("for--in");
    for (let posicion in elRestoDeCampos) {
        console.log("El campo en la posicion " + posicion + " \n\t es " + elRestoDeCampos[posicion]);
    }
    console.log("for--of");
    for (let campo of elRestoDeCampos) {
        console.log("El campo es " + campo);
    }
}
var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 7] = "Calle";
    TipoDeVia[TipoDeVia["Rua"] = 14] = "Rua";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 4] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 6] = "Carretera";
})(TipoDeVia || (TipoDeVia = {}));
var TipoDeVia;
(function (TipoDeVia) {
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
var Puntos;
(function (Puntos) {
    Puntos[Puntos["Touchdown"] = 5] = "Touchdown";
    Puntos[Puntos["Goal"] = 3] = "Goal";
})(Puntos || (Puntos = {}));
var miTipoDeVia = TipoDeVia.Calle;
console.log("Tipo de via : " + miTipoDeVia);
console.log("Tipo de via : " + TipoDeVia[miTipoDeVia]);
var avenida = TipoDeVia.esAvenida("Avda");
function invertir(elementos) {
    let invertido = [];
    for (let posicion = 0, posicionInvertido = elementos.length - 1; posicion < elementos.length; posicion++, posicionInvertido--) {
        invertido[posicionInvertido] = elementos[posicion];
    }
    return invertido;
}
let textosInvertidos = invertir(["clientes", "clientes2"]);
let hijosDePadreInvertidos = invertir([hijoDePadre, hijoDePadre2]);
class DAOGenerico {
    stringify(objeto) {
        return objeto + "";
    }
}
class ArrayGenericDAO {
    constructor() {
        this.almacen = [];
    }
    add(objeto) {
        this.almacen.push(objeto);
    }
    del(objeto) {
    }
    list() {
        return this.almacen;
    }
}
var dao = null;
class Calculadora {
    constructor() {
        this.memoria = 0;
    }
    operar(numero, operacion) {
        this.memoria = this.memoria + numero;
    }
    dameLaMemoria() {
        return this.memoria;
    }
}
let calc1 = new Calculadora();
let calc2 = new Calculadora();
calc1.operar(7, "+");
class CalculadoraCientifica extends Calculadora {
    operar(numero, operacion) {
        if (operacion == "+") {
            return super.operar(numero, operacion);
        }
        else {
        }
    }
}
var Operador;
(function (Operador) {
    Operador[Operador["sumar"] = 0] = "sumar";
    Operador[Operador["restar"] = 1] = "restar";
    Operador[Operador["multiplicar"] = 2] = "multiplicar";
    Operador[Operador["dividir"] = 3] = "dividir";
})(Operador || (Operador = {}));
class Utilidades {
    static localizarCadena() {
    }
}
var util = new Utilidades();
Utilidades.localizarCadena;
function localizarCadena() {
}
function localizarNumero() {
}
function resetearFormulario() {
}
console.log("Clase día 16-11-2016");
let unaVariable = {};
unaVariable.unNombre = "rafa";
unaVariable = {};
console.log("nombre: " + unaVariable.unNombre);
//# sourceMappingURL=app.js.map