// Dependencies
import { combineReducers } from 'redux';

// Actions
import { TOGGLE_PULLOUT, CLOSE_PULLOUT } from '../actions/actionNames';

// Components
import { MENU_ITEM_ID } from '../containers/menuItems';

export interface IState {
    items: number[];
    isVisible: boolean;
}

export const reducer = combineReducers<IState>({
    items: (
        state = [
            MENU_ITEM_ID.showHotItems,
            MENU_ITEM_ID.showThing,
            MENU_ITEM_ID.toggleTheme,
            // MENU_ITEM_ID.searchThing,
        ],
        action) => {
            return state;
        },
    isVisible: (state = false, action) => {
        const {
            type,
        } = action;
        switch (type) {
            case TOGGLE_PULLOUT:
                return !state;
            case CLOSE_PULLOUT:
                return false;
            default: return state;
        }
    },
});
