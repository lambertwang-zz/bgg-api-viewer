// Local
import { SET_THEME } from './actionNames';

export default function toggleDarkTheme(isDark: boolean) {
    return {
        type: SET_THEME,
        isDark,
    };
}
