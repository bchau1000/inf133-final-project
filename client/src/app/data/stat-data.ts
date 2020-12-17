export class StatData {
    id:number;
    name:string;
    value: number;

    constructor(id:number, name:string, value:number) {
        this.id = id;
        this.name = name[0].toUpperCase() + name.substring(1);
        this.value = value;
    }

    get shortName(){
        if(this.name === 'Hp')
            return 'HP';
        else if(this.name === 'Attack')
            return 'ATK';
        else if(this.name === 'Defense')
            return 'DEF';
        else if(this.name === 'Special-attack')
            return 'SP. ATK';
        else if(this.name === 'Special-defense')
            return 'SP. DEF';
        else
            return 'SPD';
    } 

    get color(){
        if(this.name === 'Hp')
            return '#d53a44';
        else if(this.name === 'Attack')
            return '#fda828';
        else if(this.name === 'Defense')
            return '#018fe7';
        else if(this.name === 'Special-attack')
            return '#9a5bff';
        else if(this.name === 'Special-defense')
            return '#90afc5';
        else
            return '#388d3c';
            
    }

    get percent() {
        return (this.value/255) * 100;
    }
}