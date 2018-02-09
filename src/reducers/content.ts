// Dependencies
import { combineReducers } from 'redux';

// Actions
import {
    RECEIVE_THING_FOR_SHOW,
    RECEIVE_THING_LIST,
    REQUEST_THING_LIST,
    SHOW_THING,
} from '../actions/actionNames';

// Common
import { CONTENT_LAYOUT } from '../common/constants';

// Datasources
import { IBggThing } from '../datasources/bgg/IBggApi';

export interface IState {
    layout: CONTENT_LAYOUT;
    title: string;
    things: IBggThing[];
}

export const reducer = combineReducers<IState>({
    layout: (state = CONTENT_LAYOUT.empty, action) => {
        const {
            type,
        } = action;

        switch (type) {
            case RECEIVE_THING_LIST:
                return CONTENT_LAYOUT.list;
            case RECEIVE_THING_FOR_SHOW:
                return CONTENT_LAYOUT.thing;
            case REQUEST_THING_LIST:
            case SHOW_THING:
                return CONTENT_LAYOUT.loading;
            default: return state;
        }
    },
    title: (state = 'Bgg Api Viewer', action) => {
        const {
            type,
        } = action;

        switch (type) {
            default: return state;
        }
    },
    things: (
        state = [
        ],
        action) => {
        const {
            type,
            things,
            thing,
        } = action;

        switch (type) {
            case RECEIVE_THING_LIST:
                return things;
            case RECEIVE_THING_FOR_SHOW:
                return [thing];
            default: return state;
        }
    },
});
