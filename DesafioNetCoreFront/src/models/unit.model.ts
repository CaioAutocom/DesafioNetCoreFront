import { Product } from "./product.model";

export class Unit
{
    constructor(
        public shortId: string,
        public acronym: string,
        public description: string,
        public products: Product[]
    ) {}
}