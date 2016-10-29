$(document).ready(inicializarEventos);
function inicializarEventos(){
    $("#peticion_de_ajax").click(getFile);
}
function getFile(){
    $("#contenido_de_ajax").load("ejemplo17-host_file_server.txt");

}
