//restricciones
const m = require("mongoose");
m.connect("mongodb://localhost/test");
var libro = require("./ejm04-I-model");

/*
validation midleware w/mongoose
indexes 
//http://mongoosejs.com/docs/validation.html

Back-end
https://docs.mongodb.com/v3.2/core/document-validation/
*/