// Local
import { CLOSE_PULLOUT, TOGGLE_PULLOUT } from './actionNames';

export function closePullout() {
    return {
        type: CLOSE_PULLOUT,
    };
}

export function togglePullout() {
    return {
        type: TOGGLE_PULLOUT,
    };
}