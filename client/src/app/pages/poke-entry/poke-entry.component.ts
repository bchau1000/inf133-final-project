import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData} from '../../data/pokemon-data';

@Component({
  selector: 'app-poke-entry',
  templateUrl: './poke-entry.component.html',
  styleUrls: ['./poke-entry.component.css']
})
export class PokeEntryComponent implements OnInit {
name:string;
sprite:string;
pokemon:PokemonData;
  constructor(private route: ActivatedRoute,private pokeService: PokemonService) {
    this.name = "";
    this.sprite = "../../../assets/defaultquestion.png"
    this.pokemon = new PokemonData(-1,"");
   }

  ngOnInit(): void {
    var id = this.route.snapshot.paramMap.get('id') as string;
    this.name = id.charAt(0).toUpperCase()+ id.slice(1);
    console.log(this.name);
    this.getPokemon(id);
  }
  getPokemon(name:string){
    this.pokeService.getAllPokemon(1,0,name).then((data)=>{
      //this.pokemon = data;
      var pokeId = data; //TODO:Once data is fixed take out split
      console.log(pokeId);
      this.sprite ='../../../assets/sprites/'+pokeId+'.png';
    });
  }
}
