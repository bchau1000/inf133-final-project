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

  // Grab the query from the search bar and change the url accordingly
  sendQuery(){
    console.log(this.query)
    window.location.href='pokedex?limit=100&offset=0&name=' + this.query;
  }
}
