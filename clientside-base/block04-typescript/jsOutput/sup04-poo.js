class Coche {
    constructor(color = null, modelo = null, velocidad = null) {
        if (color != null && color != "") {
            this.$color = color;
        }
        else {
            this.$color = "en fabricación";
        }
        if (modelo != null && modelo != "") {
            this.modelo = modelo;
        }
        else {
            this.$modelo = "en fabricación";
        }
        if (velocidad == null) {
            this.velocidad = 0;
        }
        else {
            this.velocidad = velocidad;
        }
    }
    get $color() {
        return this.color;
    }
    set $color(value) {
        this.color = value;
    }
    get $modelo() {
        return this.modelo;
    }
    set $modelo(value) {
        this.modelo = value;
    }
    get $velocidad() {
        return this.velocidad;
    }
    set $velocidad(value) {
        this.velocidad = value;
    }
    acelerar() {
        this.velocidad++;
        return this.velocidad;
    }
    frenar() {
        return (--this.velocidad);
    }
}
Coche.numeroDeObjetosCreados = 0;
let coche = new Coche();
Coche.numeroDeObjetosCreados++;
if (Coche.numeroDeObjetosCreados > 0) {
    console.log("Hemos creado el coche " + Coche.numeroDeObjetosCreados + ": color " + coche.$color + " - modelo " + coche.$modelo);
}
else {
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
coche2.$modelo = "Seat Córdoba";
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche2.$color + " - modelo " + coche2.$modelo);
let coche3 = new Coche("BLANCO");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche3.$color + " - modelo " + coche3.$modelo);
let coche4 = new Coche("", "Peugeot 306");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche4.$color + " - modelo " + coche4.$modelo);
let coche5 = new Coche("YELLOW", "BMW");
console.log("Hemos creado el coche " + ++Coche.numeroDeObjetosCreados + ": color " + coche5.$color + " - modelo " + coche5.$modelo);
//# sourceMappingURL=sup04-poo.js.map