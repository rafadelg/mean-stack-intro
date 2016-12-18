//Schemas & models
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
//Schema#add(obj, prefix) runtime
module.exports = m.model("Libro",LibroSchema);

/*


Back-end:
https://docs.mongodb.com/v3.2/data-modeling
*/

