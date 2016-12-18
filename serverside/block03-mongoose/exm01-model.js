const m = require("mongoose");
m.connect("mongodb://localhost/test"); //standalone o cluster: 2017
//Generación de mi modelo (con el q voy a trabajar)
//Lo suyo es: 1º tenerlo predefinido 2º exportarlo 3º importarlo (aquí)
const Libro = m.model ("Libro",
    {   //Esquema (embebido)
        titulo:String,
        autor:String,
        pages:Number,


    });
var libro = new Libro({titulo:"El senor de los arillos",autor:"JJTolki",pages:3500});
libro.save ((error)=>{
    if (error) console.error("Error al guardar",error);
    else console.log("Pelicula guardada.");
});

