import { Unit } from "./unit.model";

export class Product
{
    constructor(
        public shortId: string,
        public fullDescription: string,
        public shortDescription: string,
        public price: number,
        public storage: string,
        public barCode: string,
        public canSell: boolean,
        public active: boolean,
        public acronym: string,
        public unit: Unit
    ) {}
}