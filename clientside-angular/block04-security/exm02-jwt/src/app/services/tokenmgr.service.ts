//token manager
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

const content_json = "application/json";

@Injectable()
export class TokenmgrService {

  private token:string;

  constructor(private http:Http){
    const currentUsr = JSON.parse(localStorage.getItem('currentUsr'));
    this.token = currentUsr && currentUsr.token;
   }

   login(usr:string,pwd:string):Observable<boolean>
   {
     let headers = new Headers({'Content-Type':content_json});
     let requestOptions = new RequestOptions({headers:headers});
     return this.http.post
     (
        'http://127.0.0.1:8080/api/authenticate',
        {name:usr,pwd:pwd},
        requestOptions
     )
     .map(
        (response: Response)=> 
          {
            let token = response.json() && response.json().token;
            if (token){
              this.token = token;
              //localStorageToken.setItem('currentUsr',JSON.stringify ({name:usr,token:token}));
              this.localStorageToken(token,usr);
              return true;
            }
            return false; 
          }
      );
      //TODO: catch missing
   }

   logout(){
     this.token = null;
     localStorage.removeItem('currentUsr');
   }

   getMemberInf():Observable<T>{
     let headers = new Headers({'Authorization':this.token});
     let requestOptions = new RequestOptions({headers:headers});
     return this.http.get('http://127.0.0.1:8080/memberinf',requestOptions)
     .map(
        (response:Response)=>
          {
            response.json();
          }
     );
   }

  private localStorageToken(token: string,usr: string){
    this.token = token;
    localStorage.setItem('currentUsr',JSON.stringify({name:usr,token:token}));
  }
}  //end TokenmgrService class
