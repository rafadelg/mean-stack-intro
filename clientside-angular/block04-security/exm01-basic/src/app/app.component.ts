import { Component } from '@angular/core';
import { BasicService } from './basic.service';
//import {  } from ' ';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ BasicService ]
})
export class AppComponent {
  title = 'app works!';

  constructor(private service: BasicService){
    service.getResult().subscribe
    (
      (resultado)=> { console.log("Resultado: ",resultado); },
      error => console.error(error),
      ()=> {console.log("Me matais")}
    );
  }
}