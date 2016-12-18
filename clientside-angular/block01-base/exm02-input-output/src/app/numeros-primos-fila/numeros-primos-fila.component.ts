import { Component, OnInit, EventEmitter } from '@angular/core';
// otra forma b) -> vía import
// import { Component, OnInit, numero } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  //voy a indicar las entradas q yo tengo; lo q va a recibir
  inputs: ['numero'],
  //Definición del evento
  outputs:['eventoMostrar']
})

export class NumerosPrimosFilaComponent implements OnInit {

  private numero: number = 0;
  // forma b) 
  // @ import numero
 
  private eventoMostrar: EventEmitter<Boolean> = new EventEmitter(); //propagar el evento
  private mostrarContenido: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  //disparar el evento
  enviarNotificacion(): void{
    this.mostrarContenido = ! this.mostrarContenido;
    console.log("Evento enviado!");
    this.eventoMostrar.emit(this.mostrarContenido);
    //console.log("Evento enviado!");
  }

}
