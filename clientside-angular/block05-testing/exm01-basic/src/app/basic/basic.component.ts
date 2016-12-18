import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  /*private*/public name:string;

  public othersElements:number[];

  constructor() {
    this.name = "Ruben";
    this.othersElements = [1,2,3,4,5];
   }

  ngOnInit() {
  }

  public testMethod():string{
    return "Hi, how are you? I'm fine!";
  }

}
