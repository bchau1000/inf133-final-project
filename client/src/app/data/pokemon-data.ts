export class PokemonData {
    id:number;
    name:string;
    imageURL:string;

    constructor(name:string, imageURL:string) {
        this.id = 0;
        this.name = name;
        this.imageURL = imageURL;
    }

}