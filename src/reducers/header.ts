// Dependencies
import { combineReducers } from 'redux';

// Components
import { MENU_ITEM_ID } from '../containers/menuItems';

// Actions
import {
    CLOSE_SEARCH,
    RECEIVE_THING_FOR_SHOW,
    RECEIVE_THING_LIST,
    REQUEST_THING_LIST,
    SHOW_THING,
    TOGGLE_SEARCH
} from '../actions/actionNames';

// Utilities
import { getPrimaryName } from '../utilities/thing';

// Root
import rootStore from '../root/rootStore';

export interface IState {
    title: string;
    leftItems: number[];
    rightItems: number[];
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
        action) => state,
    rightItems: (
        state = [
            MENU_ITEM_ID.toggleSearch,
        ],
        action) => {
            const {
                type
            } = action;

            switch (type) {
                case CLOSE_SEARCH:
                case TOGGLE_SEARCH:
                    break;
                default:
                    return state;
            }

            if (rootStore && !rootStore.getState().search.isVisible) {
                return [
                    MENU_ITEM_ID.closeSearch,
                ]
            }
            return [
                MENU_ITEM_ID.toggleSearch,
            ]
        },
});
