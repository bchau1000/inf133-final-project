import { Component, Input, OnInit } from '@angular/core';
import { PokemonData } from '../../data/pokemon-data';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})

export class PokemonItemComponent implements OnInit {
  @Input() pokemon!: PokemonData;
  id!:number;

  constructor(private pokeService: PokemonService) {
  }

  ngOnInit(): void {
  }
}