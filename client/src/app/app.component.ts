import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeGacha';
  query:string = "";

  ngOnInit(){
    
  }

  search() {
    window.location.href = 'pokemon?limit=100&offset=0&name=' + this.query;
  }
}
