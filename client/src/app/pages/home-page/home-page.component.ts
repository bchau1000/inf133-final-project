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
  allPokemon:PokemonData[] = [];
  name:string = '';

  offset:number = 0;
  limit:number = 100;
  
  count:number = 0;
  pages:number[] = [];

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) { 
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if(params['limit'] && params['offset']) {
        this.limit = params['limit'];
        this.offset = params['offset'];
        this.name = params['name'];
      }
    });
    this.getPokemonCount(this.name);
    this.getAllPokemon(this.limit, this.offset, this.name);
  }

  getAllPokemon(limit:number, offset:number, name:string) {
    this.pokeService.getAllPokemon(limit, offset, name).then((data)=>{
      this.allPokemon = data;
    });
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
}