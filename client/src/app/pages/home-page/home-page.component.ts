import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private route:ActivatedRoute, private pokeService: PokemonService) { 
    this.name ="pidgey";
    this.pokemon = new PokemonData("test","test");
  }

  ngOnInit(): void {
    
  }

  getPokemon(){
    console.log(this.name);
    this.pokeService.getPokemon(this.name).then((data)=>{
      this.pokemon = data;
      console.log(this.pokemon)
    });
  }
}
