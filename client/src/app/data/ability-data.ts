export class AbilityData {
    id:number;
    name:string;

    constructor(id:number, name:string) {
        this.id = id;
        this.name = name[0].toUpperCase() + name.substring(1);
    }
}