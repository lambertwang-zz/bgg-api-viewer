// Datasources
import { IThing } from '../IThing';

export enum LINK_TYPE {
    boardgamecategory,
    boardgamefamily,
}

export interface IBggThing extends IThing {
    rank?: number;
}
