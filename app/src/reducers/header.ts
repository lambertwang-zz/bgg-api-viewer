// Dependencies
import { combineReducers } from 'redux';

// Components
import { MENU_ITEM_ID } from '../containers/menuItems';

// Actions
import {
    RECEIVE_THING_FOR_SHOW,
    RECEIVE_THING_LIST,
    REQUEST_THING_LIST,
    SHOW_THING,
} from '../actions/actionNames';

// Utilities
// import { getPrimaryName } from '../utilities/thing';
import { getPrimaryName } from 'magellantoo_components';

export interface IState {
    title: string;
    leftItems: number[];
}

export const reducer = combineReducers<IState>({
    title: (state = 'Bgg Api Viewer', action) => {
        const {
            type,
            thing,
        } = action;

        switch (type) {
            case RECEIVE_THING_LIST:
                return 'Hot Board Games';
            case RECEIVE_THING_FOR_SHOW:
                return getPrimaryName(thing);
            case REQUEST_THING_LIST:
            case SHOW_THING:
                return 'Just wait!';
            default: return state;
        }
    },
    leftItems: (
        state = [
            MENU_ITEM_ID.togglePullout,
        ],
        action) => {
        return state;
    },
});
