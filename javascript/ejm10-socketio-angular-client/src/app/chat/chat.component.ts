import { Component, OnInit, OnDestroy } from '@angular/core';

import { Message } from '../message';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})

export class ChatComponent implements OnInit,OnDestroy {

  private msgs: Message[];
  private msg: Message;
  private conn/*:Observable*/;

  constructor(private service:ChatService) {
      this.msgs = [];
  }

  sendMsgByChatComponent():void{
    console.log("Msg a enviar por component: " + this.msg);
    this.service.sendMsg(this.msg);
  }

  ngOnInit() {
    this.msg = new Message("","");
    this.conn= this.service.getMsg().subscribe(
      (newMsg:Message) => {
          console.log ("New message received!")
          this.msgs.push(newMsg);
      }
    );
  }

  ngOnDestroy() {
    this.conn.unsubscribe();
  }  

}
