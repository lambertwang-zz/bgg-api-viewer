// Local
import {
    CLEAR_SEARCH,
    CLOSE_SEARCH,
    TOGGLE_SEARCH
} from './actionNames';

export function clearSearch() {
    return {
        type: CLEAR_SEARCH,
    };
}

export function closeSearch() {
    return {
        type: CLOSE_SEARCH,
    };
}

export function toggleSearch() {
    return {
        type: TOGGLE_SEARCH,
    };
}