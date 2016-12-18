import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { ActivatedRoute } from '@angular/router'; //TODO: here

@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.css']
})
export class ConsultaLibroComponent implements OnInit {

  private libro: Libro;
  
  constructor(
    private route:ActivatedRoute
  ) { 
       this.libro = new Libro (0,"");  
  }

  ngOnInit() {
    //info a mostrar
    this.libro.id = this.route.snapshot.params['id']; //devuelve la ruta actual completa q he lanzado
  }

}
