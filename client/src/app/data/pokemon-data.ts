export class PokemonData {
    id:string;
    name:string;

	constructor(id:string) {
		//Assign a random (unique) ID. This may be useful for comparison (e.g., are two logged entries the same).
        this.id = id;
        this.name ="";
	}

}
