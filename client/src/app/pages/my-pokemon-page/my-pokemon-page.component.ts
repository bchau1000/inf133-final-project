import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokemonData } from '../../data/pokemon-data';
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-my-pokemon-page',
  templateUrl: './my-pokemon-page.component.html',
  styleUrls: ['./my-pokemon-page.component.css']
})
export class MyPokemonPageComponent implements OnInit {
  allPokemon:PokemonData[] = [];
  pages:number[] = [];

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) {
  }

  ngOnInit(): void {
    this.getPokemon()
  }

  getPokemon() {
    this.pokeService.getSpoils(1).then(data => {
      this.allPokemon = data;
      console.log(this.allPokemon);
    });
  }
}
