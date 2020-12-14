export class PokemonData {
    id:string;
    name:string;
    url:string;


    constructor(name:string, url:string) {
        this.id = url.split('/')[6];
        this.name = name;
        this.url = url;
    }

    get imageURL(){
        return 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + this.id + '.png'
    }
}