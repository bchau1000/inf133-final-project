export class PokemonData {
    id:number;
    name:string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name.charAt(0).toLocaleUpperCase() + name.slice(1);
    }

    get sprite() {
        return '../../assets/sprites/' + this.id + '.png';
    }
} 