// Root
import rootStore from '../root/rootStore';

// Components
import { IMenuItemProps } from '../components/menuItem/MenuItem';

// Actions
import {
    requestHotList,
    searchThing,
    showThing
} from '../actions/bggAction';
import setTheme from '../actions/setTheme';
import { togglePullout } from '../actions/pullout';
import { closeSearch, toggleSearch } from '../actions/search';

export enum MENU_ITEM_ID {
    closeSearch,
    searchThing,
    showHotItems,
    showThing,
    togglePullout,
    toggleSearch,
    toggleTheme
}

export const DEFAULT_MENU_ITEMS: { [key: number]: IMenuItemProps } = {
    [MENU_ITEM_ID.searchThing]: {
        label: 'Search Thing',
        icon: 'search',
        onClick: () => {
            rootStore.dispatch(searchThing('gloom'));
        },
    },
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
            rootStore.dispatch(setTheme(!rootStore.getState().root.isThemeDark));
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
    [MENU_ITEM_ID.toggleSearch]: {
        label: 'Search',
        icon: 'search',
        onClick: () => {
            rootStore.dispatch(toggleSearch());
        },
    },
    [MENU_ITEM_ID.closeSearch]: {
        label: 'Search',
        icon: 'remove',
        onClick: () => {
            rootStore.dispatch(closeSearch());
        },
    },
};
