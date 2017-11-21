// bump

export enum SIZE_BREAKPOINT {
    small = 0,
    medium,
    large,
    xlarge,
    xxlarge,
}

export enum THEME {
    Dark = 0,
    Light,
}

export enum THEME_LEVEL {
    primary = 0,
    secondary = -1,
    highlight = 1,
}

export const FONT_SIZE = {
    tiny: '10px',
    small: '12px',
    medium: '16px',
    large: '18px',
    giant: '24px',
    massive: '32px',
};

export const ROW_HEIGHT_MAP: { [key: number]: string } = {
    [SIZE_BREAKPOINT.small]: '60px',
    [SIZE_BREAKPOINT.medium]: '80px',
    [SIZE_BREAKPOINT.large]: '80px',
    [SIZE_BREAKPOINT.xlarge]: '100px',
    [SIZE_BREAKPOINT.xxlarge]: '120px',
};
