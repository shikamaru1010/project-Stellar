export class Sizes {
    private sizes: string[];
    constructor(){
        this.sizes= ['S','M',"L",'XL'];
    }
    getSizes(): string[]{
        return this.sizes;
    }
}
