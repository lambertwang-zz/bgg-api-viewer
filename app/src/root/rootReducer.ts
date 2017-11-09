// Dependencies
import { combineReducers } from 'redux';

// Actions
import {
    PAGE_SCROLL,
    RESIZE_BREAKPOINT,
    SET_THEME,
} from '../actions/actionNames';

// Common
// import { SIZE_BREAKPOINT } from '../common/constants';
import { SIZE_BREAKPOINT, THEME, getSizeThreshold } from 'magellantoo_components';

// Reducers
import { reducer as header, IState as HeaderState } from '../reducers/header';
import { reducer as menuItems, IState as MenuItemState } from '../reducers/menuItems';
import { reducer as pullout, IState as PulloutState } from '../reducers/pullout';
import { reducer as content, IState as ContentState } from '../reducers/content';

// Utilities
// import { getSizeThreshold } from '../utilities/responsive';
// import { THEME } from '../common/constants';

export interface IRootState {
    theme: THEME;
    sizeBreakpoint: SIZE_BREAKPOINT;
    scrollY: number;
}

export interface IState {
    content: ContentState;
    header: HeaderState;
    menuItems: MenuItemState;
    pullout: PulloutState;
    root: IRootState;
}

const root = combineReducers<IRootState>({
    theme: (state = THEME.Dark, action) => {
        const {
            type,
        } = action;

        switch (type) {
            case SET_THEME:
                return state * -1 + 1;
            default: return state;
        }
    },
    sizeBreakpoint: (state = undefined, action) => {
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
    scrollY: (state = 0, action) => {
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
});
