import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData} from '../../data/pokemon-data';
import { StatData } from 'src/app/data/stat-data';


@Component({
  selector: 'app-poke-entry',
  templateUrl: './poke-entry.component.html',
  styleUrls: ['./poke-entry.component.css']
})
export class PokeEntryComponent implements OnInit {
name:string;
sprite:string;
pokemon:PokemonData;
type:string;
hp:number;
atk:number;
def:number;
spAtk:number;
spDef:number;
spd:number;

  constructor(private route: ActivatedRoute,private pokeService: PokemonService) {
    this.name = "";
    this.sprite = "../../../assets/defaultquestion.png"
    this.pokemon = new PokemonData(-1,"");
    this.type="";
    this.hp =-1;
    this.atk =-1;
    this.def =-1;
    this.spAtk=-1;
    this.spDef=-1;
    this.spd=-1;
   }

  ngOnInit(): void {
    var param = this.route.snapshot.paramMap.get('id') as string;
    this.name = param.charAt(0).toUpperCase()+ param.slice(1);
    this.getPokemon(param);
  }
  getPokemon(name:string){
    this.pokeService.getAllPokemon(1,0,name).then((data)=>{
      this.pokemon = data[0];
      console.log(this.pokemon);
      this.sprite =this.pokemon.sprite;
      this.getPokemonInfo(this.pokemon.id);
    });
  }
  getPokemonInfo(id:number){
    this.pokeService.getPokemonStats(id).then((stats)=>{
      this.hp = stats[0].value;
      this.atk = stats[1].value;
      this.def = stats[2].value;
      this.spAtk = stats[3].value;
      this.spDef = stats[4].value;
      this.spd = stats[5].value;

    });
    this.pokeService.getPokemonTypes(id).then((types)=>{
      console.log(types);
      for(var i=0; i<types.length;i++){
        this.type = this.type+types[i].name.toUpperCase();
        if(i != types.length-1){
          this.type = this.type +"/" 
        }
      }
    });
  }
}
