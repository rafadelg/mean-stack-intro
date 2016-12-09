$(document).ready(inicializaEventosConJQuery);
function presionarBotonConJquery() {
    alert("Botón pulsado vía JQuery");
}
function inicializaEventosConJQuery() {
    $("#botonjquery1").click(presionarBotonConJquery);
    $("#botonjquery2").click(presionarBotonConJquery);
    $("button.continue").html("Next Step...");
}