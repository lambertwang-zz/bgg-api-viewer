// Dependencies
import { combineReducers } from 'redux';

// Actions
import {
    PAGE_SCROLL,
    RESIZE_BREAKPOINT,
    SET_THEME,
} from '../actions/actionNames';

// Common
import { SIZE_BREAKPOINT } from '../common/constants';

// Reducers
import { reducer as content, IState as ContentState } from '../reducers/content';
import { reducer as header, IState as HeaderState } from '../reducers/header';
import { reducer as menuItems, IState as MenuItemState } from '../reducers/menuItems';
import { reducer as pullout, IState as PulloutState } from '../reducers/pullout';
import { reducer as search, IState as SearchState } from '../reducers/search';

// Utilities
import { getSizeThreshold } from '../utilities/responsive';

export interface IRootState {
    isThemeDark: boolean;
    scrollY: number;
    sizeBreakpoint: SIZE_BREAKPOINT;
}

export interface IState {
    content: ContentState;
    header: HeaderState;
    menuItems: MenuItemState;
    pullout: PulloutState;
    search: SearchState;
    root: IRootState;
}

const root = combineReducers<IRootState>({
    isThemeDark: (state = true, action: any) => {
        const {
            type,
        } = action;

        switch (type) {
            case SET_THEME:
                return !state;
            default: return state;
        }
    },
    sizeBreakpoint: (state: any = undefined, action: any) => {
        const {
            type,
            breakpoint,
        } = action;

        if (!state) {
            return getSizeThreshold();
        }

        switch (type) {
            case RESIZE_BREAKPOINT:
                return breakpoint;
            default: return state;
        }
    },
    scrollY: (state = 0, action: any) => {
        const {
            type,
            scrollY,
        } = action;
        switch (type) {
            case PAGE_SCROLL:
                return scrollY;
            default: return state;
        }
    },
});

export const reducer = combineReducers<IState>({
    content,
    header,
    menuItems,
    pullout,
    root,
    search,
});
