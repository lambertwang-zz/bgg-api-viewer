// Common
// import { THEME } from '../common/constants';
import { THEME } from 'magellantoo_components';

// Local
import { SET_THEME } from './actionNames';

export default function toggleTheme(theme: THEME) {
    return {
        type: SET_THEME,
        theme,
    };
}
