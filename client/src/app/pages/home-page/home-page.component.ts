import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData} from '../../data/pokemon-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  name:string;
  pokemon:PokemonData;
  allPokemon:PokemonData[];
  offset:number;
  limit:number;
  offsetValues = [0, 100, 200, 300, 400, 500, 600, 700];

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) { 
    this.name ="pidgey";
    
    this.limit = 100;
    this.offset = 0;
    this.pokemon = new PokemonData("-1", "-1");
    this.allPokemon = [];
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if(params['limit'] === undefined || params['offset'] === undefined) {
        this.limit = 100;
        this.offset = 0;
      } 
      else {
        this.limit = params['limit'];
        this.offset = params['offset'];
      }
      
    });

    this.getAllPokemon(this.limit, this.offset);
  }

  changePage(command:string){
    if(command == 'next') {
      window.location.href = 'pokedex?limit=100&offset=' + (this.offset + 100);
    }
    else{ 
      window.location.href = 'pokedex?limit=100&offset=' + (this.offset - 100);
    }
  }

  getAllPokemon(limit:number, offset:number){
    this.pokeService.getAllPokemon(limit, offset).then((data)=>{
      this.allPokemon = data;
    });
  }

  getPokemon(){
    this.pokeService.getPokemon(this.name).then((data)=>{
      this.pokemon = data;
    });
  }
}