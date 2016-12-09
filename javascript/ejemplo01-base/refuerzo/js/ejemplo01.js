function procesarDatoBotonUno() {
    let texto = document.getElementById("idTexto").value;
    if (texto == "" || texto == null) {
        alert("Debe introducir un valor.");
        return false;
    }
    document.getElementById("idTextoInsertado").innerHTML = texto;
    document.getElementById("idTexto").value = "";
}

let botonDos = document.getElementById("idBotonDos");
botonDos.onclick = function() {
    let texto = document.getElementsByName("nameTextoDos");
    let valor = texto[0].value;
    if (valor == "" || valor == null) {
        alert("Debe insertar un valor.");
        return false;
    }
    document.getElementById("idTextoInsertadoDos").innerHTML = valor;
    document.getElementById("idTextoDos").value = "";
}

function procesarDatoBotonTres() {
    let texto = document.getElementById("idTextoTres").value;
    if (texto == "" || texto == null) {
        alert("Debe introducir un valor.");
        return false;
    }
    document.getElementById("idTextoInsertadoTres").innerHTML = texto;
    document.getElementById("idTextoTres").value = "";
}
let botonTres = document.getElementById("idBotonTres");
botonTres.addEventListener("click", procesarDatoBotonTres, false);
