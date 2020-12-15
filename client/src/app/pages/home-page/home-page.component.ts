import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData } from '../../data/pokemon-data';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
  name:string;
  allPokemon:PokemonData[];
  offset:number;
  limit:number;
  count:number;
  pages:number[];

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) { 
    this.name = "";
    this.limit = 100;
    this.offset = 0;
    this.count = 0;
    this.pages = [];
    this.allPokemon = [];
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      // If all the parameters are defined, set them, otherwise leave them as default
      if(params['limit'] && params['offset']) {
        this.limit = params['limit'];
        this.offset = params['offset'];
        this.name = params['name'];
      }
    });

    this.getPokemonCount(this.name);
    this.getAllPokemon(this.limit, this.offset, this.name);
  }

  getPokemonCount(name:string) {
    this.pokeService.getPokemonCount(name).then((data)=>{
      this.count = data;

      if(this.count%100 > 0)
        this.count = Math.ceil(data/100);
      else
        this.count = Math.floor(data/100);
      
      for(let i = 1; i <= this.count; i++)
        this.pages.push(i);
    });
  }

  getAllPokemon(limit:number, offset:number, name:string) {
    this.pokeService.getAllPokemon(limit, offset, name).then((data)=>{
      this.allPokemon = data;
    });
  }
}