function operar() {
	let f = document.getElementById("idForm");
	let resultado = 0;
	let operacion = f.idOperacion.value;
	let op1 = parseFloat(f.valor1.value);
	let op2 = parseFloat(f.valor2.value);
	if (isNaN(op1) || isNaN(op2)) {
		alert("Introduzca valores numéricos");
	}
	else {
		switch (operacion) {
   			case ("+") :  resultado=op1+op2;break;
   			case ("-") :  resultado=op1-op2;break;
   			case ("*") :  resultado=op1*op2;break;
   			case ("/") :  resultado=op1/op2;break;
   			default    :  resultado="Debe elegir un operador";
		}
		f.result.value=resultado;
		f.valor1.value = "";
		f.valor2.value = "";
	}
	return false;
}
var boton = document.getElementById("idBoton");
boton.addEventListener("click", operar, false);