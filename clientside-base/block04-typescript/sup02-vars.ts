//declaración de variables: tipado
var nombre:string;
var edad:number;
var programador:boolean;
var langs: Array<string> = ["PHP","JavaScript","TypeScript","HTML","CSS"];

nombre = "Rafael";
edad = 43;
programador =true;

console.log("mi nombre es " + nombre + " y tengo " + edad + " años.");
console.log("soy programador: " + programador);
console.log(langs);
console.log(langs[0] + " - " + langs[1] + " - " + langs[4]);

//el tipo any permite asignarle un valor de cualquier tipo a una variable y, luego, poder asignarle
//un valor de otro tipo diferente sin problemas a la hora de la compilación.
var miNumeroAny:any = 44; // miNumeroAny = 44 
console.log(miNumeroAny);
miNumeroAny = "rafael"; 
console.log(miNumeroAny);
miNumeroAny = false; 
console.log(miNumeroAny);
