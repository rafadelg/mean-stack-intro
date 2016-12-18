import { Component, OnInit } from '@angular/core';
import { UsermanagementService } from '../services/usermanagement.service';

@Component({
  selector: 'app-otherprovider',
  templateUrl: './otherprovider.component.html',
  styleUrls: ['./otherprovider.component.css'],
  providers: [
    UsermanagementService
  ]
})
export class OtherproviderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
