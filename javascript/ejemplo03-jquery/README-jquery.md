# PROCESO PARA TRABAJAR CON JQUERY
Web de jQuery: https://jquery.com/  
Versión (a 30-10-2016): 3.1.1

####Formas de trabajar:
**a) En local**, procedimiento: http://jquery.com/download/  
**b) On-line**, versiones disponibles: http://code.jquery.com/jquery/  
Nosotros trabajaremos *on-line*, con una **versión simplificada**. ¿Cómo?
- indicando en la cabecera de mi HTML esa versión [http://code.jquery.com/jquery-latest.min.js]
- ubicando mis archivos jQuery en la carpeta /js (junto a los javascript "puros") de nuestro proyecto.

**Ejemplo**
```[HTML]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App que usa jQuery</title>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="js/mi_archivo_jQuery.js"></script>
    <script type="text/javascript" src="js/mi_archivo_javascript.js"></script>
</head>
<body>
   
   <!-- mi código html -->
   
</body>
</html>
```