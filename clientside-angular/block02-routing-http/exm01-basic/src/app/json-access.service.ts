import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/Http';


import { Libro } from './libro'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'


@Injectable()
export class JsonAccessService {

  private uri = "http://localhost:3000/libros";


  constructor(private http:Http) {
    
   }

   bookAccess():Observable<Libro[]>{

     return this.http.get(this.uri).
        map((response:Response)=>{
        return response.json()
      }).
        catch((error:any)=>{
          console.log("Error procesamto peticion");
          return Observable.throw((error.json().error)||"Error svr");
        });
  }

  //bookModify


}
