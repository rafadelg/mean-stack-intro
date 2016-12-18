import { Component, OnInit } from '@angular/core';
import { NumerosPrimosService } from '../numeros-primos.service';

@Component({
  selector: 'app-numeros-primos-panel',
  templateUrl: './numeros-primos-panel.component.html',
  styleUrls: ['./numeros-primos-panel.component.css'],
  //Recordar: debo añadir
  providers: [NumerosPrimosService]
})

export class NumerosPrimosPanelComponent implements OnInit {

  private listaDeNumeros: number[];
  private mostrarInformacion: boolean = false;
          
  constructor(private numerosPrimosService: NumerosPrimosService) {
    this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;

}

ngOnInit() {
  }

colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
}
//devuelve un texto con el tipo de Nº concreto
tipoDeNumero (numero: number): string{

      if(this.numerosPrimosService.esPrimo(numero)){
        return  "Es un Nº primo.";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return  "Es un múltiplo de 3.";
      } else{
        return "No es nada; pobrecillo!"; 
      }

}

eventoDeFilaRecibido(eventoRecibido: boolean): void{
  this.mostrarInformacion =  eventoRecibido;
  console.log("Evento recibido y tratado por el padre.")
}

}
