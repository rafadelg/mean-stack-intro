import { Component, OnInit } from '@angular/core';
// otra forma b) -> vía import
// import { Component, OnInit, numero } from '@angular/core';

@Component({
  selector: 'app-numeros-primo-fila',
  templateUrl: './numeros-primo-fila.component.html',
  styleUrls: ['./numeros-primo-fila.component.css'],
  //voy a indicar las entradas q yo tengo; lo q va a recibir
  inputs: ['numero']
})
export class NumerosPrimoFilaComponent implements OnInit {

  private numero: number = 0;
  // forma b) 
  // @numero
 
  constructor() { }



  ngOnInit() {
  }

}
