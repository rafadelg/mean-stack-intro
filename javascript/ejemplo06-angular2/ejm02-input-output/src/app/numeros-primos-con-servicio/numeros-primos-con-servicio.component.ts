import { Component, OnInit } from '@angular/core';
import { NumerosPrimosService } from '../numeros-primos.service';
//import { OtroNuevoServicio  } from '../otro-nuevo.service';

@Component({
  selector: 'app-numeros-primos-con-servicio',
  templateUrl: './numeros-primos-con-servicio.component.html',
  styleUrls: ['./numeros-primos-con-servicio.component.css'],
  // aquí tengo que poner a mano el nombre del servicio porq
  // el servicio está construido; ahora hay que "inyectarlo" para usarlo
  providers: [NumerosPrimosService]
  // providers: [NumerosPrimosService, OtroNuevoServicio]
})

export class NumerosPrimosConServicioComponent implements OnInit {

  listaDeNumeros: number[];
  mostrarInformacion: boolean = false;
  constructor(private numerosPrimosService: NumerosPrimosService ) { 
    this.listaDeNumeros = this.numerosPrimosService.listaDeNumeros;
  }
  //si inyecto más de un servicio: 
  //constructor(private numerosPrimosService: NumerosPrimosService 
  //            private miOtroNuevoServicio : OtrNuevoServicio) { ... }


  colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
  }

  ngOnInit() {
  }

  cambiarEstadoInformacion():void{
    this.mostrarInformacion = !this.mostrarInformacion;
  }

}
