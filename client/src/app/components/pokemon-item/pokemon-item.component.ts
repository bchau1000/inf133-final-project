import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from '../../data/pokemon-data'

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})

export class PokemonItemComponent implements OnInit {
  @Input() pokemon:PokemonData;

  constructor() {
    this.pokemon = new PokemonData('-1', '-1');
  }

  validPokemon() {
    
    return true;
  }

  ngOnInit(): void {
  }

}
