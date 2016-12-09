$(document).ready(inicializarEventos);
function inicializarEventos() {
    $("tr").click(presionFila);
}
function presionFila() {
    let filaActual = $(this);
    filaActual.css("background-color", "grey");
    /*
    let filaOne = $("#idOne");
    let filaTwo = $("#idTwo");
    let filaThr = $("#idThr");
    filaOne.css("background-color", "#ff0000");
    filaTwo.css("background-color", "cyan");
    filaThr.css("background-color", "yellow");
    */
}