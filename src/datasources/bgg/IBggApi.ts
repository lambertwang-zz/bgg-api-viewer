// Datasources
import { IThing } from '../IThing';

export enum LINK_TYPE {
    boardgamecategory,
    boardgamefamily,
}

export enum THING_TYPE {
    rpgitem = 'rpgitem',
    videogame = 'videogame',
    boardgame = 'boardgame',
    boardgameaccessory = 'boardgameaccessory',
    boardgameexpansion = 'boardgameexpansion'
}

export interface IBggThing extends IThing {
    rank?: number;
}

export interface ISearchParams {
    query: string;
    type?: THING_TYPE[];
    exact?: boolean;
}
