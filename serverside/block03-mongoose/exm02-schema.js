const m = require("mongoose");
m.connect("mongodb://localhost/test");
var Schema = m.Schema;
//Definición esquema (constructor)
const LibroSchema = new Schema(
    {
        titulo:String,
        autor:String,
        sinopsis:String,
        fecha:Date,
        categoria:String,
        //pages:Number,
        campos_biblioteca: {
            ejemplares:Number,
            reservas:Number,
            ultima_reserva:Date
        }
    });
//Schema#add(obj, prefix): modelar en tpo real mi esquema (alterarlo)

//module.export
var Libro = m.model("Libro",LibroSchema);
var libro = new Libro(
    {
        titulo:"Lord of the rings",
        campos_biblioteca:{
            ultima_reserva: new Date()
        }
    }
);
libro.save((error)=>{
    if (error) console.error("Error al guardar",error);
    else console.log("Pelicula guardada con id: " + libro._id);
});
libro.find((error,data)=>{
    console.log(data);
});