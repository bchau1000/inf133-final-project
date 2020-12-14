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
      console.log(data.name);
      var pokemon = new PokemonData(data.name,data.front_default);
      return pokemon;
    });
  }
}
