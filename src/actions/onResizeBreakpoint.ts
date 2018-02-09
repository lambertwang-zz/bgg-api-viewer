// Common
import { SIZE_BREAKPOINT } from '../common/constants';

// Local
import { RESIZE_BREAKPOINT } from './actionNames';

export default function onResizeBreakpoint(breakpoint: SIZE_BREAKPOINT) {
    return {
        type: RESIZE_BREAKPOINT,
        breakpoint,
    };
}
