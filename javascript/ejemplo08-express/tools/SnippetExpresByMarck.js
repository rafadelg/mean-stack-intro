"Express server": 
    {
        "prefix": "express",
        "body": [
        "var express = require('express');",
        "var app = express();",

        "app.get('/$1', (req, res) => {",
        "	console.log('${2:Peticion Enviada}');",
        "	${3:// Response}",

        "});",
		
		"app.post('/$4', (req, res) => {",
        "	console.log('${5:Peticion Enviada}');",
        "	${6:// Response}",

        "});",

        "app.put('/$7', (req, res) => {",
        "	console.log('${8:Peticion Enviada}');",
        "	${9:// Response}",

        "});",
		
		"app.delete('/$10', (req, res) => {",
        "	console.log('${11:Peticion Enviada}');",
        "	${12:// Response}",

        "});",

        "app.listen(8080$13, () => {",
        "	console.log('${14:Servidor Iniciado}');",
        "});"
        ],
        "description": "Express Server"
    }