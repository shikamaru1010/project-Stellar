export class Color {
    private color: string[];

    constructor(){
        this.color = ["red", "green", "blue","orange"];
    }
    getColor(): string[]{
        return this.color;
    }
}