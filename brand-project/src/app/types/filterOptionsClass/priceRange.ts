export class PriceRange {
    private max: number;
    private min: number;

    constructor(min: number = 0, max: number = 400){
        this.min = min;
        this.max = max;
    }
    getPriceRange(): {min: number,max: number}{
        return {min: this.min,max: this.max};
    }
    setPrice(min: number,max:number){
        this.min = min;
        this.max = max;
    }
    setPriceRange(min: number, max: number) {
        this.min = min;
        this.max = max;
      }
}