import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  // getArtist(id:string):Promise<PokemonData> {
  //   return this.sendRequestToExpress('/artist/'+encodeURIComponent(artistId)).then((data) => {
  //     var arr = new ArtistData(data);
  //     return arr;
  //   });
  // }
}
