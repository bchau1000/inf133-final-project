export class StatData {
    id:number;
    name:string;
    value: number;

    constructor(id:number, name:string, value:number) {
        this.id = id;
        this.name = name[0].toUpperCase() + name.substring(1);
        this.value = value;
    }
}