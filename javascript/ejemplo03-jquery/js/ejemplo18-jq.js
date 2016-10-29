//Vamos a poner eun ejemplo Clic y, a continuación, usamos Ajax
$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("#peticion_de_ajax").click(peticionAjaxGenerica);
}
function peticionAjaxGenerica(){
    $.ajax({
        // Puede ser una cadena, un array o un Objeto JS
        // Petición común a un servidor (el formato sería) -> ?nombre=Rafa&nivel_de_cafe=medio
        data: {nombre:"Rafa",nivel_de_cafe:"medio"},
        //Tipo de petición http (GET, POST, ..)
        type:"GET",
        //Tipo de dato esperado
        dataType:"json",
        //URL de comunicación con el servicio
        //url:"https://jsonplaceholder.typicode.com/albums"
        url:"https://jsonplaceholder.typicode.com/users" 
        // web de pruebas de json: https://jsonplaceholder.typicode.com
    }).done(peticionCompletada).fail(peticionFallida);
    /* 1º creamos el objeto
       2º con done; le paso el objeto a peticionCompletada/peticionFallida
       Nota: el encadenamto se interpreta de izq a dcha)
    */
    function peticionCompletada(data,status,jqXHR){
        alert("Petición completada con 'status'" + status + " : " + data);
        /* Probar: */ $("#contenido_de_ajax").html(data[2].username);
    }
    function peticionFallida(jqXHR,status,error){
        alert("ERROR al procesar la petición");
        console.log("Status: " + status);
        console.log("Error : " + error);
    }
    // Vamos a ver las versiones específicas
    function pruebasConGetYPost(){
        $.get("http://localhost:8080/ejemplo17-host_file_server.txt",resultadoGet);
        $.post("http://localhost:8080/ejemplo17-host_file_server.txt",resultadoPost);
    }
    function resultadoGet(data,status){
        alert("Resultado: " + data);
    }
    function resultadoPost(){
        alert("POST correcto!");
    }
}