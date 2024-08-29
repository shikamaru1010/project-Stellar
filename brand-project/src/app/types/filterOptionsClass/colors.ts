export class Colors {
    private color: string[];

    constructor(){
        this.color = ["red", "green", "blue","orange"];
    }
    getColors(): string[]{
        return this.color;
    }
}