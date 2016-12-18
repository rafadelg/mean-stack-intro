$(document).ready(inicializarEventos);
function inicializarEventos() {
    $("tr").click(presionFila);
}
let click = false;
function presionFila() {
    let filaActual = $(this);
    if (!click){
        filaActual.css("background-color", "grey");
        click = true;
    }
    else{
        filaActual.css("background-color", "cyan");
        click = false;
    }
}