export class Price {
    private max: number;
    private min: number;

    constructor(min: number = 0, max: number = 400){
        this.min = min;
        this.max = max;
    }
    getPrice(): {min: number,max: number}{
        return {min: this.min,max: this.max};
    }
    setPrice(min: number,max:number){
        this.min = min;
        this.max = max;
    }
}