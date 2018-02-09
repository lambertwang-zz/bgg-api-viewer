// Dependencies
import { combineReducers } from 'redux';

// Actions
import {
    CLEAR_SEARCH,
    CLOSE_SEARCH,
    RECEIVE_SEARCH_RESULTS,
    TOGGLE_SEARCH,
} from '../actions/actionNames';

// Datasources
import { IBggThing } from '../datasources/bgg/IBggApi';

export interface IState {
    isVisible: boolean;
    searchResults: IBggThing[];
    searchQuery: string;
}

export const reducer = combineReducers<IState>({
    isVisible: (state = false, action) => {
        const {
            type,
        } = action;
        switch (type) {
            case CLOSE_SEARCH:
                return false;
            case TOGGLE_SEARCH:
                return !state;
            default: return state;
        }
    },
    searchResults: (state = [], action) => {
        const {
            type,
            thing
        } = action;
        switch (type) {
            case RECEIVE_SEARCH_RESULTS:
                return thing;
            case CLOSE_SEARCH:
            case CLEAR_SEARCH:
                return [];
            default: return state;
        }
    },
    searchQuery: (state = '', action) => {
        const {
            type,
            query
        } = action;
        switch (type) {
            case RECEIVE_SEARCH_RESULTS:
                return query;
            case CLOSE_SEARCH:
            case CLEAR_SEARCH:
                return '';
            default: return state;
        }

    }
});
