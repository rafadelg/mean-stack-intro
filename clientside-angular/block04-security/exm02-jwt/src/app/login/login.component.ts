import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenmgrService } from '../services/tokenmgr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ TokenmgrService ]
})

export class LoginComponent implements OnInit {
  
  private usr:any = {}; //no model

  constructor(private service:TokenmgrService, private router:Router) { 
  }

  ngOnInit() {
  }

  authenticate():void{
    this.service.login(this.usr.usr,this.usr.pwd)
      .subscribe(
        result => {
          if(result === true)
              this.router.navigate(['/']);
          else
              this.usr = {};
        }
      );
  }
}
