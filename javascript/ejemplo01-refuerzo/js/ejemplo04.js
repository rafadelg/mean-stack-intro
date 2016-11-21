function jugar() {
	let numIntentos = 1;
    let palabraMagica = "abracadabra", palabraIntroducida = "", msgDelPrompt;
	let acierto = false, salir;
	do {
		msgDelPrompt = "[Intento " + numIntentos + "º]\n" + "Introduce la 'Palabra mágica'...";
		palabraIntroducida =
			prompt(msgDelPrompt, "texto por defecto");
		if (palabraIntroducida == null || palabraIntroducida == "") {
			alert("Debe introducir un valor.");
			continue;
		}
		if (palabraIntroducida == palabraMagica) {
			acierto = true;
			break;
		}
		document.getElementById("intento").innerHTML = numIntentos;
		document.getElementById("palabra").innerHTML = palabraIntroducida;
		if (numIntentos == 3) {
			salir = confirm("Ha alcanzado el Nº máximo de intentos.\n\n¿Desea continuar jugando.?");
			if (!salir) {
				break;
			}
			else {
				numIntentos = 0;
			}
		}
		++numIntentos;
	} while (true);
	alert("Pulse una tecla");
	if (acierto) {
		document.write("<h1>Ha encontrado la palabra mágica</h1><h2>Nº de intentos: " + numIntentos + "</h2>");
	}
	else {
		document.write("<h1>No ha encontrado la palabra mágica.</h1>");
	}
}