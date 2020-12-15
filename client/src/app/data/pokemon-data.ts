export class PokemonData {
    id:number;
    name:string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name[0].toUpperCase() + name.substring(1);
    }

    get sprite() {
        return '../../assets/sprites/' + this.id + '.png';
    }
} 