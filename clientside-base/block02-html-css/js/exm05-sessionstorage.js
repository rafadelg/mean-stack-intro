function storage() {
    var variable = new Object();
    variable.nombre = "uno";
    variable.apellido = "dos";
    var variable2 = eval("(" + JSON.stringify(variable) + ")");
    alert(variable2.apellido);
    if (sessionStorage) {
        if (sessionStorage.getItem("color")) {
            alert("El color almacenado en el Session Storage es : " + sessionStorage.getItem("color"));
        } else {
            sessionStorage.setItem("color", "cyan");
        }
        if (sessionStorage.getItem("ovejas")) {
            alert("El tipo de ovejas es : " +
                sessionStorage['ovejas']);
        } else {
            sessionStorage['ovejas'] = "merinas";
        }
        if (sessionStorage.getItem("tipoCoche")) {

            alert("El coche que te mola es : " + sessionStorage.tipoCoche);
        } else {
            sessionStorage.tipoCoche = "Aston Martin";
        }
        alert("El numero de elementos en SessionStorage es : " + sessionStorage.length);
        comprobarSessionStorageConAlert();
        sessionStorage.setItem("color", "azul");
        comprobarSessionStorageConAlert();
        sessionStorage.removeItem("color");
        comprobarSessionStorageConAlert();

        alert("El numero de elementos en SessionStorage es : " + sessionStorage.length);
    } else {
        sessionStorage = {};
    }
}
function comprobarSessionStorageConAlert() {
    for (var contador = 0;
        contador < sessionStorage.length;
        contador++) {
        var key = sessionStorage.key(contador);
        alert("El valor de " + key + " es " + sessionStorage.getItem(key));
    }
}