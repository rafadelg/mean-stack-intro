##PROCESO PARA TRABAJAR CON JSON (1ª aproximación)
Web del proyecto, que describe la especificación http://www.json.org/  
####Recursos necesarios
**a) Instalar Servidor JSON**  
1. Ir a nuestra carpeta de trabajo  
ejm (linux):  *user@user-pc:~/repo/mean-stack-intro/javascript/ejemplo03-jquery*  
2. Ejecutar (como root/admin):   *sudo npm install -g json-server*  

**b) Recurso externo JSONPlaceholder**, proporciona una API REST de pruebas, disponible en [https://jsonplaceholder.typicode.com]  
Notas: hay q considerar dos cosas
- el verbo CRUD
- y la ruta correspondte según las peticiones (Post, Comments, Albums, Photos, Users)

**c) Recurso propio:** personalizar nuestra API REST  

Nota: tendremos q arrancar el svr JSON indicándole el recurso.  
ejm: *json-server  - - watch ejem-jq-ajax-json.json*
