// Datasources
import BggApi from '../datasources/bgg/BggApi';

// Root
import rootStore from '../root/rootStore';

// Local
import {
    RECEIVE_SEARCH_RESULTS,
    RECEIVE_THING_LIST,
    REQUEST_THING_LIST,
    RECEIVE_THING_FOR_SHOW,
    SEARCH_THING,
    SHOW_THING,
} from './actionNames';

export function requestHotList() {
    BggApi.hot((things) => {
        rootStore.dispatch(receiveHotList(things));
    });

    return {
        type: REQUEST_THING_LIST,
    };
}

function receiveHotList(things: any) {
    return {
        type: RECEIVE_THING_LIST,
        things,
    };
}

export function showThing(id: string) {
    BggApi.thing((things) => {
        rootStore.dispatch(receiveThingForShow(things));
    }, { stats: 1, id });

    return {
        type: SHOW_THING,
    };
}

function receiveThingForShow(thing: any) {
    return {
        type: RECEIVE_THING_FOR_SHOW,
        thing,
    };
}

export function searchThing(query: string) {
    BggApi.search((things) => {
        rootStore.dispatch(receiveSearchResults(query, things));
    }, { query });

    return {
        type: SEARCH_THING,
    };
}

function receiveSearchResults(query: string, thing: any) {
    return {
        type: RECEIVE_SEARCH_RESULTS,
        thing,
        query,
    };
}