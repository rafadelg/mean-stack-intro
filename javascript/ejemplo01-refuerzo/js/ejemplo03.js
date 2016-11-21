let numIntentos = 0;
let palabraMagica = "abracadabra";
let acierto = false;
function jugar() {
    let palabraIntroducida = document.getElementById("idTexto").value;
    if (palabraIntroducida == null || palabraIntroducida == "") {
	    alert("Debe introducir un valor.");
    }
    else {
        ++numIntentos;
        document.getElementById("intento").innerHTML = numIntentos;
        document.getElementById("palabra").innerHTML = palabraIntroducida;
        document.getElementById("idTexto").value = "";
        if (palabraIntroducida == palabraMagica){
            acierto = true;
            alert("Pulsa una tecla.");
            document.write("<h1>Ha encontrado la palabra mágica</h1><h2>Nº de intentos: "+numIntentos+"</h2>");
        }    
        if (numIntentos == 3 && ! acierto){
	        alert("Pulsa una tecla.");
            document.write("<h1>No ha encontrado la palabra mágica.</h1>");
	    }
    }
}

