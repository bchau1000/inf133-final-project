import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PokemonData } from '../data/pokemon-data';
import { TypeData } from '../data/type-data';
import { StatData } from '../data/stat-data';
import { AbilityData } from '../data/ability-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl:string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  private requestData(endpoint:string):Promise<any> {
    return Promise.resolve(this.http.get(this.baseUrl + endpoint).toPromise());
  }

  // Grab a single pokemon as a pokemon object given their id
  getPokemon(id:number):Promise<PokemonData> {
    var request = '/single-pokemon/' + id;

    return this.requestData(request).then((data) => {
      return new PokemonData(data[0].id, data[0].name);
    });
  }

  // Grab the row count from the query without limit for pagination
  getPokemonCount(name:string):Promise<number> {
    var request = '/count/' + name

    return this.requestData(request).then((data) => {
      return data[0].count;
    });
  }

  // Grab an array of pokemon objects given query parameters
  getAllPokemon(limit:number, offset:number, name:string):Promise<PokemonData[]> {
    var request = '/pokemon/' + limit + '/' + offset;

    if(name != undefined)
      request = '/pokemon/' + limit + '/' + offset + '/' + name;

    return this.requestData(request).then((data) => {
      var pokemon_arr: Array<PokemonData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        pokemon_arr.push(new PokemonData(data[i].id, data[i].name))
        
      return pokemon_arr;
    });
  }

  // Grab a pokemon's types as an array of type objects
  getPokemonTypes(id:number):Promise<TypeData[]> {
    return this.requestData('/pokemon-types/' + id).then((data) => {
      var types_arr: Array<TypeData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        types_arr.push(new TypeData(data[i].type_id, data[i].name))
        
      return types_arr;
    });
  }

  // Grab a pokemon's stats as an array of stat objects
  getPokemonStats(id:number):Promise<StatData[]> {
    return this.requestData('/pokemon-stats/' + id).then((data) => {
      var stats_arr: Array<StatData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        stats_arr.push(new StatData(data[i].stat_id, data[i].name, data[i].value))
        
      return stats_arr;
    });
  }

  // Grab an array of pokemon objects given a pokemon type
  getPokemonWithType(name:string):Promise<PokemonData[]> {
    return this.requestData('/types/'+ name).then((data) => {
      var pokemon_arr: Array<PokemonData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        pokemon_arr.push(new PokemonData(data[i].id, data[i].name))
        
      return pokemon_arr;
    });
  }

  // Save the pokemon a user gets to the MySQL database
  // Send through post
  sendSpoils(user_id:number, pokemon_id:number):void {
    this.http.post<string>(this.baseUrl + '/insert/', { 'user_id': `${user_id}`, 'pokemon_id': `${pokemon_id}`}).subscribe(data => { })
  }
}
