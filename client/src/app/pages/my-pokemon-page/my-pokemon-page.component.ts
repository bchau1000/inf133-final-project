import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'

@Component({
  selector: 'app-my-pokemon-page',
  templateUrl: './my-pokemon-page.component.html',
  styleUrls: ['./my-pokemon-page.component.css']
})
export class MyPokemonPageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) {
  }

  ngOnInit(): void {
  }

  getPokemon() {
    this.pokeService.getPokemon(1).then(data => {

    });
  }
}
