##BOOTSTRAP
Web de Bootstrap: http://getbootstrap.com/
Versión (a 30-10-2016): 3.3.7
#####Proceso de instalación para trabajar en local
1. Ir a: http://getbootstrap.com/getting-started/#download
2. Hacer clic en: "Download Bootstrap"
3. Descomprimir archivo bajado "bootstrap-3.3.7-dist.zip"
4. Copiar todo su contenido (son 3 carpetas: css, js y fonts) en nuestra carpeta de trabajo  
	Ejm (Linux): user@user-pc:~/repo/mean-stack-intro/javascript/ejemplo04-bootstrap$ (copiar aquí esas 3 carpetas)  
Nota:
 - en adelante, en esas mismas carpetas, iremos colocando nuestros propios archivos CSS y JS
 - y, en cada uno de mis archivos HTML, deberemos incluir -al ppio de la cabecera- el código q sigue:

```[HTML]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="css/mi_propio_archivo_de_estilos.css>

    <script type="text/javascript" src="js/mi_archivo_javascript.js">
  </head>
  <body>
    <div class="container">   <!-- NOTA: esta etiqueta es importante para trabajar con Bootstrap-->
		<h1>Mi aplicación con Bootstrap"</h1>
	
			<!-- *** resto de mi código html y bootstrap***  -->
	    
    </div>
  </body>
</html>
```


