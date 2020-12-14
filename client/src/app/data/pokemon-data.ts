import { threadId } from "worker_threads";

export class PokemonData {
    id:string;
    name:string;
    url:string;


    constructor(name:string, url:string) {
        this.id = url.split('/')[6];
        this.name = name;
        this.url = url;
    }

    get sprite() {
        return '../../assets/sprites/' + this.id + '.png';
    }
}