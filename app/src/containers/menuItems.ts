// Root
import rootStore from '../root/rootStore';

import { IMenuItemProps } from 'magellantoo_components';

// Actions
import requestHotList from '../actions/requestHotList';
import setTheme from '../actions/setTheme';
import showThing from '../actions/showThing';
import togglePullout from '../actions/togglePullout';

export enum MENU_ITEM_ID {
    showThing,
    showHotItems,
    togglePullout,
    toggleTheme,
}

export const DEFAULT_MENU_ITEMS: { [key: number]: IMenuItemProps } = {
    [MENU_ITEM_ID.showThing]: {
        label: 'Get Thing',
        icon: 'get_app',
        onClick: () => {
            rootStore.dispatch(showThing('180263'));
        },
    },
    [MENU_ITEM_ID.toggleTheme]: {
        label: 'Theme Toggle',
        icon: 'invert_colors',
        onClick: () => {
            rootStore.dispatch(setTheme((rootStore.getState().root.theme * -1) + 1));
        },
    },
    [MENU_ITEM_ID.showHotItems]: {
        label: 'Hot Items',
        icon: 'whatshot',
        onClick: () => {
            rootStore.dispatch(requestHotList());
        },
    },
    [MENU_ITEM_ID.togglePullout]: {
        label: 'Menu',
        icon: 'menu',
        onClick: () => {
            rootStore.dispatch(togglePullout());
        },
    },
};
