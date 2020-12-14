import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PokemonData} from '../data/pokemon-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl:string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  private requestData(endpoint:string):Promise<any> {
    return Promise.resolve(this.http.get(this.baseUrl + endpoint).toPromise());
  }

  getPokemon(name:string):Promise<PokemonData> {
    return this.requestData('/pokemon/'+encodeURIComponent(name)).then((data) => {
      var pokemon = new PokemonData(data.name,data.sprites.front_default);
      return pokemon;
    });
  }

  getAllPokemon(limit:number, offset:number):Promise<PokemonData[]> {
    console.log(offset)
    return this.requestData('/pokemon/' + limit + '/' + offset).then((data) => {
      var pokemon_arr: Array<PokemonData> = [];
      var length = data.results.length

      for(let i = 0; i < length; i++)
      if(!data.results[i].name.includes('-'))
        pokemon_arr.push(new PokemonData(data.results[i].name, data.results[i].url))

      return pokemon_arr;
    });
  }
}
