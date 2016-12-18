import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';
import { JsonAccessService } from '../json-access.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  providers: [JsonAccessService]
})

export class ListaLibrosComponent implements OnInit {

  private libros: Libro[];

  constructor(private service:JsonAccessService)
  {
      this.service.bookAccess().subscribe((data)=>{
        this.libros = data;
      },(error)=>{
          console.error("Error de acceso: " + error);
        }),
      ()=> {
        console.log("Finish!");
      }
      /* eg. previous
      this.libros = [
        new Libro (1,"A"),
        new Libro (2,"B")
      ]
      */
  }

  ngOnInit() {
  }

}
