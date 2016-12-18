$(document).ready(initializeEvents);
function initializeEvents() {
    $("#idBotonGenerarForm").click(addHtmlForm);
    $("#idBotonMostrarElem").click(alertHtmlForm);
}
function addHtmlForm() {
    $("#formulario").html(
        '<form action="#">' +
            'Ingrese nombre:&nbsp<input type="text" name="nombre"/>' +
            '<br>' +
            'Contrase&ntilde;a:&nbsp;<input type="password" name="pass"/>' +
            '<br>' +
            '<input type="submit" value="enviar"/>' +
        '</form>'
    );
}
function alertHtmlForm() {
    alert($("#formulario").html());
}      