###ACLARACIONES
Carpeta con ejemplos de refuerzo para la comprensión de la OO con TypeScript.  
El código y comentarios se han adaptado de la fuente [Curso de TypeScript - Lenguaje usado por Angular 2 | Udemy](https://www.udemy.com/curso-de-typescript-el-lenguaje-utilizado-por-angular-2/)  
Para entender cómo funciona el entorno, se recomienda manejar los archivos de configuración: launch.json, tasks.json y tsconfig.json (Nota: no se suben los archivos .*maps* y .js generados por el *transpiler*). Igualmente, podría ser de utilidad consultar los .js (tanto en ES6 como ES5); ayudaría a conocer mejor JavaScript. Buen resumen de las novedades de ES6, se puede consultar [aquí.](http://es6-features.org/#Constants)  
###Infraestructura necesaria  
- Sistema operativo: MS Windows, Linux (eg Ubuntu o CentOS)
- Entorno de ejecución para JS: Node.js (motor de JS de Google Chrome)
- Browser: Chrome
- Editor de código: MS VS Code  
  [recomenable] extensiones  
 - *TypeScript Toolbox* (de DSKWRK)  
 - *Debugger for Chrome* (de MS)  
- TypeScript, se puede usar con el módulo  
  - propio de Code (integrado en él)  
  - del Gestor de paquetes de Node.js (NPM)  
  Nota: la versión del módulo integrado (en la última ver. de Code -a 12-11-2016-) es **<** a la última ver. del módulo NPM  
- Adecuación del entorno (puesta a punto)  
 - Estructuración de proyectos (estructura de directorios/ficheros dentro de Code)  
   /projectRoot  
   ├── .vscode  
   │      ├── tasks.json  
   │      └── launch.json  
   ├── jsInput  
   │      ├── project-to-migrate1.js  
   │      └── project-to-migrate2.js  
   ├── jsOutput (.js and *.maps* generated files)  
   ├── tsconfig.json  
   └── .gitignore  
 - Automatizar el proceso de "transpilación". Operativa, como indican [1] y [2]  

###Glosario
Orientación a Objetos: paradigma que pretende modelar cualquier problemática informática, tratando las entidades/actores/*stackholders* intervinientes como si fuesen objetos.  
*Stakeholder*: los *stakeholders* de un proyecto, son aquellas personas y/o entidades q tienen algún impacto o interés en éste. A pesar de que los usuarios siempre son *stakeholders*, NO todos los *stakeholders* son usuarios [3]. Lectura complemtaria [4]  
POO: programación orientada a objetos  
G&S: métodos *setters* and *getters*  
MS VS Code: Microsoft Visual Studio Code (en adelante, Code)  
JS / TS: JavaScript / TypeScript  
usr: usuario / cte: cliente / svr: servidor  

###Referencias  
[1] R. Gómez García, "Módulo 2: Introducción a las TW", Apuntes curso MEAN Stack, pp. 6-8, CFTIC-Getafe, Comunidad de Madrid, 2016  
[2] J. Ubaldo, "TS y Code, post 29-10-2016 [on-line]", Blog José Ubaldo, Oct. 2016, acceso nov. 2016, disponible en  
[aquí](https://joseucarvajal.wordpress.com/tag/typescript/) (apdos. "Pasos 2, 3 y 7")  
[3] V. Pachón Álvarez, "Tema 1. Introducción a la Ingeniería de Requisitos", Apuntes asignatura IR, Dpto. TI de la ETSI, UHU, 2013.  
[4] "La evolución del concepto en los escritos de Ed. Freeman [on-lie]", *Alumni newsletter*, no. 5, Nov. 2009. Accedido en marzo 2013, disponible [aquí](http://www.iese.edu/es/files/La%20evaluaci%C3%B3n%20del%20concepto%20de%20stakeholders%20seg%C3%BAn%20Freeman_tcm5-39688.pdf)  


