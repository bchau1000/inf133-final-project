import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() query:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendQuery(){
    window.location.href='pokemon?limit=100&offset=0&name=' + this.query;
  }
}
