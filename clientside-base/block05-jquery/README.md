##[JQUERY](http://jquery.com/)
**a) En local**, [*downloading jQuery*](http://jquery.com/download/)  
**b) On-line**, from a CDN [*(eg. jQ-CDN latest stable versions)*](http://code.jquery.com/)  
  
Nosotros trabajaremos con la librería *on-line*, usando una versión simplificada
- indicando en la cabecera de mi HTML la ruta *http://code.jquery.com/jquery-latest.min.js*
- y ubicando mis archivos jQuery en la carpeta /js de nuestro proyecto.  
  
####Ejemplo
```[HTML]
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My App que usa jQuery</title>
    <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
    <script type="text/javascript" src="js/archivo_jQuery.js"></script>
    <script type="text/javascript" src="js/otro_archivo.js"></script>
</head>
<body>
  
   <!-- código html -->
  
</body>
</html>
```
####[jQuery sintax](http://www.w3schools.com/jquery/jquery_syntax.asp)
Basic syntax is: [$(selector)](http://www.w3schools.com/jquery/jquery_selectors.asp).[action()](http://www.w3schools.com/jquery/jquery_ref_events.asp)  
1. a $ sign to define/access jQuery  
2. a (selector) to "query (or find)" HTML elements  
3. a jQuery action() to be performed on the element(s)  
  
$(this).hide() - hides the current element  
$("p").hide() - hides all **p** elements  
$(".test").hide() - hides all elements with class="test"  
$("#test").hide() - hides the element with id="test"  
  

