//var miWebSocket = null;
function conectar() {
    //miWebSocket = new WebSocket("ws://localhost:8080/HTML5/pruebaws");
    miWebSocket = new WebSocket("wss://echo.websocket.org/");
    miWebSocket.onopen = function () {
        alert("Web Socket abierto");
    }
    miWebSocket.onmessage = function (evento) {
        alert("Web Socket responde : " + evento.data);
    }
    miWebSocket.onclose = function () {
        alert("Web Socket cerrado");
    }
    miWebSocket.onerror = function (evento) {
        alert("Error en Web Socket " + evento.data);
    }
}
function desconectar() {
    miWebSocket.close();
}
function enviar() {
    var mensaje = document.getElementById("mensaje").value;
    miWebSocket.send(mensaje);
}