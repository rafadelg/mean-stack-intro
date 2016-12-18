import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { Message } from './message'
import { Observable } from 'rxjs/Rx'


@Injectable()
export class ChatService {

  private url:string;
  private chatSocket; //

  constructor() { 
    this.url = 'http://localhost:3000';
  }

  sendMsg(msg:Message):void{
    console.log("Enviando mensaje " + msg);
    this.chatSocket.emit('envio-de-mensaje',msg)
  }

  getMsg (){
    return new Observable (
      (chatObserver) => {
        this.chatSocket = io(this.url); //conexión
        this.chatSocket.on('connect',()=>{
            console.log("Cte conectado con iD: " + this.chatSocket.id)
          }
        );
        //lógica del observable
        this.chatSocket.on('envio-de-mensaje', (datos)=>{
            chatObserver.next(datos);
          }
        );
        //unsubscribe
        return()=>{
          this.chatSocket.disconnect();
        }
    });
  }
}
