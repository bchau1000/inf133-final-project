import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service'
import { PokemonData} from '../../data/pokemon-data';

@Component({
  selector: 'app-slot-page',
  templateUrl: './slot-page.component.html',
  styleUrls: ['./slot-page.component.css']
})
export class SlotPageComponent implements OnInit {
  pokemon:PokemonData;
  slot1:string;
  slot2:string;
  slot3:string;
  types:string[];
  spriteInit:string;
  rewards:string;
  showReward:boolean = false;
  spoils:string;
  
  constructor(private pokeService: PokemonService) { 
    //Initialize
    this.spoils ="";
    this.pokemon = new PokemonData(-1,"");
    this.spriteInit = "../../../assets/";
    this.rewards ="";
    this.slot1 = "../../../assets/defaultquestion.png"
    this.slot2 = "../../../assets/defaultquestion.png"
    this.slot3 = "../../../assets/defaultquestion.png"
    this.types = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice"
    ,"Normal","Poison","Psychic","Rock","Steel","Water"];
  }

  ngOnInit(): void {
  }

  rand(){
    this.spoils = "";
    this.showReward = false;
    //Randomly pick types
    var rand = Math.floor(Math.random()*this.types.length); //Generate random index based on array length
    var randPity = rand; //Pity index to help with probabilities
    this.slot1 =this.spriteInit+this.types[rand]+".png"; //Set type to slot1
    var slot1Type = this.types[rand];
    //Push in same type into the array to give user higher chance of landing the same type (7/25) = 28%
    for(var i =0;i<6;i++)
      this.types.push(this.types[randPity]);
    //Slot 3 has lower chance than slot 2 so it comes first
    rand = Math.floor(Math.random()*this.types.length);
    this.slot3 =this.spriteInit+this.types[rand]+".png";
    var slot3Type = this.types[rand];
    //Push in same type into the array to give user higher chance of landing the same type (15/33) = 45%
    for(var i =0;i<8;i++)
      this.types.push(this.types[randPity]);
    //Slot 2 has the highest chance of repeating
    rand = Math.floor(Math.random()*this.types.length);
    this.slot2 =this.spriteInit+this.types[rand]+".png";
    var slot2Type = this.types[rand];
    
    this.resetProb();//Reset Array
    if(slot1Type === slot2Type && slot1Type === slot3Type){
      this.winner(slot1Type.toLowerCase());
    }
  }
  winner(type:string){
    //Get Pokemon from type
    this.pokeService.getPokemonWithType(type).then((data)=>{
    do{
        var rand = Math.floor(Math.random()*data.length);//Get random pokemon
        this.rewards= data[rand].name;//Only get pokemon name
    }while(this.rewards.includes('-'));//Run till the selected pokemon isnt a mega/gmax/event
      this.getPokemon(this.rewards);// Get pokemon info
      
    });

  }

  resetProb(){
    this.types = ["Bug","Dark","Dragon","Electric","Fairy","Fighting","Fire","Flying","Ghost","Grass","Ground","Ice"
    ,"Normal","Poison","Psychic","Rock","Steel","Water"];
    
  }

  getPokemon(name:string){
    this.pokeService.getAllPokemon(1,0,name).then((data)=>{
      this.pokemon = data[0];

      this.spoils = '../../../assets/sprites/' + this.pokemon.id + '.png';
      this.showReward = true;
      this.pokeService.sendSpoils(1, this.pokemon.id);
    });
  }
}
