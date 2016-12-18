import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const content_json = "application/json";
//class externa con todas las constantes del proyecto

@Injectable()
export class BasicService {
  
  constructor(private http:Http) { }

  //                      string
  getResult():Observable<Response>{
    let usr = "user";
    let pwd = "pwd";
    
    //a) let securityHeader = new Headers(/*agregar cabeceras*{'Content-Type':content_json});
    let securityHeader = new Headers();
    securityHeader.append('Authorization',"Basic" + btoa(usr + ":" + pwd) );
      
    //no se recomienda uso localhost
    //se recomienda uso, eg. var de entorno
    //con docker la url es un nombre
    let requestOptions = new RequestOptions({headers:securityHeader});
    return this.http.get("http://127.0.0.1:8080/home",requestOptions)
      .map((response: Response)=> {
          return response;
      })
      .catch((error:any)=>{
        console.error("Error: ", error);
        return Observable.throw("Error al procesar la petición");
      });
  }

}
