import { Component, OnInit } from '@angular/core';
import { TokenmgrService } from '../services/tokenmgr.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ TokenmgrService ]
})

export class HomeComponent implements OnInit {

  constructor(private service:TokenmgrService) { 

  }

  ngOnInit() {
    this.service.getMemberInf().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }
}
