// Common
import { SIZE_BREAKPOINT } from '../common/constants';

export interface ISizeBreakpoints {
    small: number;
    medium: number;
    large: number;
    xlarge: number;
    xxlarge: number;
    [key: string]: number;
}

export const DEFAULT_SIZE_BREAKPOINTS: ISizeBreakpoints = {
    small: 800,
    medium: 1080,
    large: 1920,
    xlarge: 2560,
    xxlarge: Infinity,
};

// Necessary due to some typescript enum indexing constraint
const _SIZE_STRING_ENUM_LOOKUP: { [key: string]: SIZE_BREAKPOINT } = {
    small: SIZE_BREAKPOINT.small,
    medium: SIZE_BREAKPOINT.medium,
    large: SIZE_BREAKPOINT.large,
    xlarge: SIZE_BREAKPOINT.xlarge,
    xxlarge: SIZE_BREAKPOINT.xxlarge,
};

export function getSizeThreshold(
    elementSize: number = window.innerWidth,
    breakpoints: ISizeBreakpoints = DEFAULT_SIZE_BREAKPOINTS): SIZE_BREAKPOINT {

    let breakpoint = 'xxlarge';
    for (const value in breakpoints) {
        if (elementSize < breakpoints[value]) {
            breakpoint = value;
            break;
        }
    }

    return _SIZE_STRING_ENUM_LOOKUP[breakpoint];
}
