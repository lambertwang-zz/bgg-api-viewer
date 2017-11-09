// Datasources
import BggApi from '../datasources/bgg/BggApi';

// Root
import rootStore from '../root/rootStore';

// Local
import { RECEIVE_THING_LIST, REQUEST_THING_LIST } from './actionNames';

export default function requestHotList() {
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
