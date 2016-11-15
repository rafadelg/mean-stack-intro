##Nodejs
Definición: entorno de ejecución para JS basado en el motor JS V8 de Chrome - *https://developers.google.com/V8/*  
Fuente: http://nodejs.org/  
Versión (a 15-11-2016): v6.9.1 LTS (estable + soporte durable)  
####Características
 
- Cliente/Servidor
- Programación asíncrona orientada a eventos
- Garantizar operaciones de entrada/salida sin bloqueos (evitar q cualquier recurso quede bloqueado; espera indefinida)  

Acceso a la API de un recurso (con el q voy a trabajar): **const miAPI = require ('nombre_de_la_API_del_Recurso');**  
Documentación API's disponibles: https://nodejs.org/dist/latest-v6.x/docs/api/  

####Recordatorio: npmjs, gestión de paquetes
Funcionamto/formas de trabajar  
- Local (a nivel de proyecto) package.json file / npm install / npm install  - - safe  
- Local (integrados en Code)  
- Global (sistema/usuario), vía npm -g install  

######TODO: preparar la infraestructura y optimizarla (*file level*)
- Carpeta: node_modules (importación de paquetes + dependencias)  
- Fichero: package.json - *https://docs.npmjs.com/files/package.json*  
- Atributos: "devDependences", "dependencies" - *https://docs.npmjs.com/getting-started/using-a-package.json*  

######gitignore
a) Local: a nivel de proyecto (dentro de Code)  
 - .gitignore - *https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files*  
 - .npmignore - *https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package*  

b) SSOO: a nivel de usuario (hta. Git) - *https://git-scm.com/docs/gitignore*  

