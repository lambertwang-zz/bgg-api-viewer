// Dependencies
import { combineReducers } from 'redux';

// Actions
import { SET_THEME } from '../actions/actionNames';

// Components and containers
// import { IMenuItemProps } from '../components/menuItem/MenuItem';
import { IMenuItemProps, THEME } from 'magellantoo_components';
import { DEFAULT_MENU_ITEMS, MENU_ITEM_ID } from '../containers/menuItems';

// Common
// import { THEME } from '../common/constants';

// Root
import rootStore from '../root/rootStore';

export interface IState {
    [key: number]: IMenuItemProps;
}

const reducers: { [key: number]: (state: any, action: any) => void } = {
    [MENU_ITEM_ID.toggleTheme]: (state = DEFAULT_MENU_ITEMS[MENU_ITEM_ID.toggleTheme], action) => {
        const {
            type,
        } = action;
        switch (type) {
            case SET_THEME:
                state.label = THEME[rootStore.getState().root.theme] + ' Theme';
                return state;
            default: return state;
        }
    },
};

for (const item in MENU_ITEM_ID) {
    if (!reducers[item] && !reducers[MENU_ITEM_ID[item] as any]) {
        const defaultState = DEFAULT_MENU_ITEMS[item];
        reducers[item] = (state = defaultState, action) => {
            return state;
        };
    }
}

export const reducer = combineReducers(reducers);
