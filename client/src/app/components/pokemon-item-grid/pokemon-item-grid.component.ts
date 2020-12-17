import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData } from '../../data/pokemon-data';

@Component({
  selector: 'app-pokemon-item-grid',
  templateUrl: './pokemon-item-grid.component.html',
  styleUrls: ['./pokemon-item-grid.component.css']
})
export class PokemonItemGridComponent implements OnInit {
  @Input() allPokemon:PokemonData[];
  @Input() pages:number[];

  constructor(private route:ActivatedRoute, private pokeService: PokemonService) { 
    this.allPokemon = [];
    this.pages = [];
  }

  ngOnInit(){
  }
}
