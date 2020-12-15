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

  // Grab the row count from the query without limit for pagination
  getPokemonCount(name:string):Promise<number> {
    var request = '/count/' + name

    return this.requestData(request).then((data) => {
      return data[0].count;
    });
  }

  // Grab a pokemon given query parameters
  getAllPokemon(limit:number, offset:number, name:string):Promise<PokemonData[]> {
    var request = '/pokemon/' + limit + '/' + offset;

    if(name.length)
      request = '/pokemon/' + limit + '/' + offset + '/' + name;

    return this.requestData(request).then((data) => {
      var pokemon_arr: Array<PokemonData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        pokemon_arr.push(new PokemonData(data[i].id, data[i].name))
        

      return pokemon_arr;
    });
  }

  getPokemonTypes(id:number):Promise<TypeData[]> {
    return this.requestData('/pokemon-types/' + id).then((data) => {
      var types_arr: Array<TypeData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        types_arr.push(new TypeData(data[i].type_id, data[i].name))
        
      return types_arr;
    });
  }

  getPokemonAbilities(id:number):Promise<AbilityData[]> {
    return this.requestData('/pokemon-abilities/' + id).then((data) => {
      var abilities_arr: Array<AbilityData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        abilities_arr.push(new AbilityData(data[i].ability_id, data[i].name))
        
      return abilities_arr;
    });
  }

  getPokemonStats(id:number):Promise<StatData[]> {
    return this.requestData('/pokemon-stats/' + id).then((data) => {
      var stats_arr: Array<StatData> = [];
      var length = data.length
      
      for(let i = 0; i < length; i++)
        stats_arr.push(new StatData(data[i].stat_id, data[i].name, data[i].value))
        
      return stats_arr;
    });
  }
  getType(name:string):Promise<Array<any>> {
    return this.requestData('/type/'+encodeURIComponent(name)).then((data) => {
      return data.pokemon;
    });
  }
}
