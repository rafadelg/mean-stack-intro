// POO CON TYPESCRIPT
// 1ª PARTE: creación de mi modelo, los O's
// - 1º Clase: esqueleto o molde a partir del cual se crearán mis O's (o instancias de la clase)
// - 2º Propiedades q tendrán mis O's
// - 3º Métodos, definen dos cosas:
//     -> el comportamieto propio de mis O's (q hacen, cómo se comportan)
//     -> posibilitan la comunicación entre Os de distintos tipos/clases/naturaleza
//        (los Os no están aislados en el mundo real, pueden comunicarse)
class Coche{
    //Definición de las propiedades:
    //1ª RECOMENDACIÓN: respetar el ENCAPSULAMIENTO, vía modificadores de acceso; concretamente, PRIVATE
    //ejm (como la vida misma): las personas, -su esfera- tienen su círculo íntimo, su círculo privado y su círculo público
    //a nadie le importa tu vida privada (y mucho menos, tu intimidad); con los O's ocurre lo mismo.
    //entoces, cómo accedemos a ellas? -> vía los métodos G&S
    private color: string;
    private modelo: string;
    private velocidad: number;
    //Nota: las propiedades de instancia (3 de arriba) se inicializan en el constructor.
    //PROPIEDAD DE CLASE (no de O) -vía static-: eg. vamos a controlar el Nº de O's q vamos creando
    //Suelen definirse de ámbito público (eg. conocer el Nº de coches q contaminan mi ciudad)
    public static numeroDeObjetosCreados: number = 0; //a diferencias de las propiedades de O; pueden inicializarse aquí
    //Declaración de métodos (comportamto)
    //2ª RECOMENDACIÓN: antes de definir el comportamto específico, para cada una de las propiedades privadas,
    //declarar sus G&S para hacerlos accesibles a través de éstos.
    //Para automatizar este proceso; instalar una extensión de Code, eg. "TS Toolbox (de DKWRK)"
    //Motivos de selección: fuente fiable (y, se sobre-supone, buen funcionamto)
    //fuente: VS Marketplace (Extensions for the VS family of products)
    //URL, acceso: https://marketplace.visualstudio.com/
    // ****** a continuación se muestra el resultado de la generación con dicha extensión ********
	public get $color(): string {
		return this.color;
	}

	public set $color(value: string) {
		this.color = value;
	}

	public get $modelo(): string {
		return this.modelo;
	}

	public set $modelo(value: string) {
		this.modelo = value;
	}

	public get $velocidad(): number {
		return this.velocidad;
	}

	public set $velocidad(value: number) {
		this.velocidad = value;
	}
    //Declaración de constructor
    //Def.: un C es un método especial q se lanza SIEMPRE, nada más crearse un O.
    //Uso:  para inicializar las propiedades de mi O (valores iniciales, de arranque/partida)
    //Constructor por defecto o implícito
	/*
    constructor() {
        this.velocidad = 0; 
	}
    */
    //Constructor explícitos; reciben parámetros a su llamada
    //NOTA: TS no soporta múltiples constructores (no soporta sobrecarga)
    //Emulación: 
    constructor (color: string = null, modelo: string =  null, velocidad: number = null){
        if (color != null && color != ""){
            this.$color = color;
        }
        else {
            this.$color ="en fabricación"
        }
        if (modelo != null && modelo != "" ){
            this.modelo = modelo;
        }
        else{
            this.$modelo = "en fabricación"
        }
        if (velocidad == null){
            this.velocidad = 0;
        }
        else{
            this.velocidad = velocidad;
        }
    }
    //Bien, en este punto, cabe deternerse y estudiar lo siguiente..
    //3ª RECOMENDACIÓN: algo q diferencia Microsoft del resto; la funcionalidad mejorada en el uso de los G&S,
    //q SIMPLIFICA sobremanera  -el acceso a-  y  -la modificación de-  las propiedades privadas.
    //TODO: lectura article http://www.typescriptlang.org/docs/handbook/classes.html (apdo. "Accessors"")
    
    //4ª RECOMENDACIÓN (tras declarar el constructor; declacarar el resto de métodos)
    //Por regla gral, los métodos q definen el comportamto de mis O's suelen ser públicos. Tiene sentido, pues
    //la manera de comportarse de un O indica como se desenvuelve en el mundo exterior -no están aislados!- :)
    public acelerar ():number{
        this.velocidad++;
        return this.velocidad;
    }
    public frenar ():number{
        return (--this.velocidad); //poner el -- antes implica: 1º se realiza la operación, 2º se hace la asignación
    }
}
//2ª PARTE: proceso de instanciación de clase (o creación de O's)
//A medida q need usar mis O's, hemos de crearlos
//let coche = new Coche();
let coche = new Coche();
//recordar la recomendación 3ª (eficiencia: simplifica trabajo)
//coche.$color = "ROJO";
//coche.$modelo = "Seat Córdoba";
Coche.numeroDeObjetosCreados++; //acceso a la propiedad static (OJO! propiedad de CLASE -NO de OBJETO-)
// accedemos a ella anteponiendo el nombre de la clase
if (Coche.numeroDeObjetosCreados > 0) {
    console.log("Hemos creado el coche " + Coche.numeroDeObjetosCreados + ": color " + coche.$color + " - modelo " + coche.$modelo);
}
else{
    console.log("Todavía no se ha creado ningún objeto.");
}
coche.acelerar();
console.log("Coche acelerando, velocidad " + coche.$velocidad);
coche.acelerar();
console.log("Coche acelerando, velocidad " + coche.$velocidad);
coche.acelerar();
console.log("Coche acelerando, velocidad " + coche.$velocidad);
coche.frenar();
console.log("Coche frenando, velocidad " + coche.$velocidad);
coche.frenar();
console.log("Coche frenando, velocidad " + coche.$velocidad);

let coche2 = new Coche();
coche2.$color = "ROJO";
coche2.$modelo = "Seat Córdoba"
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche2.$color + " - modelo " + coche2.$modelo);

let coche3 = new Coche("BLANCO");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche3.$color + " - modelo " + coche3.$modelo);

let coche4 = new Coche("", "Peugeot 306");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche4.$color + " - modelo " + coche4.$modelo);

let coche5 = new Coche("YELLOW", "BMW");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche5.$color + " - modelo " + coche5.$modelo);

