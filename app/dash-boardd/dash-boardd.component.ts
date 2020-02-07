import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-boardd',
  templateUrl: './dash-boardd.component.html',
  styleUrls: ['./dash-boardd.component.css']
})
export class DashBoarddComponent implements OnInit {

  userName : string;
  constructor() { 
    this.userName = localStorage.getItem("user");
  }
  ngOnInit() {
  }

}
