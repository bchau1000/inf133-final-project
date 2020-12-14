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
    console.log(this.baseUrl + endpoint)
    return Promise.resolve(this.http.get(this.baseUrl + endpoint).toPromise());
  }

  getPokemon(name:string):Promise<PokemonData> {
    return this.requestData('/pokemon/'+encodeURIComponent(name)).then((data) => {
      var pokemon = new PokemonData(data.name,data.sprites.front_default);
      return pokemon;
    });
  }

  getType(name:string):Promise<Array<any>> {
    return this.requestData('/type/'+encodeURIComponent(name)).then((data) => {
      return data.pokemon;
    });
  }
}