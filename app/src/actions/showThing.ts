// Datasources
import BggApi from '../datasources/bgg/BggApi';

// Root
import rootStore from '../root/rootStore';

// Local
import { SHOW_THING, RECEIVE_THING_FOR_SHOW } from './actionNames';

export default function showThing(id: string) {
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
