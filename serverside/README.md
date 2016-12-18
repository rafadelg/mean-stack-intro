###Gestión de paquetes
- Global (todo el sistema), vía *npm -g install*  
- Local (carpetas de usuario), vía *package.json*  
  1º Crear el archivo -> npm init  
  2º Añadir entradas a medida que se necesitan  
 - *npm install - - save* (añadiría los paquetes en "dependencies")  
 - *npm install - - save-dev* (ídem anterior pero en "devDependencies")  
- Ignorar ficheros/carpetas innecesarios de guardar en el repositorio.    
 Archivos de configuración: [.gitignore](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#Ignoring-Files), [.npmignore](https://docs.npmjs.com/misc/developers#keeping-files-out-of-your-package)
