// Common
// import { SIZE_BREAKPOINT } from '../common/constants';
import { SIZE_BREAKPOINT } from 'magellantoo_components';

// Local
import { RESIZE_BREAKPOINT } from './actionNames';

export default function onResizeBreakpoint(breakpoint: SIZE_BREAKPOINT) {
    return {
        type: RESIZE_BREAKPOINT,
        breakpoint,
    };
}
