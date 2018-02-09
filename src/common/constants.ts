export enum CONTENT_LAYOUT {
    empty,
    list,
    loading,
    thing,
}

export enum SIZE_BREAKPOINT {
    small = 0,
    medium,
    large,
    xlarge,
    xxlarge,
}

// TODO: Make these names more intuitive
export const FONT_SIZE = {
    tiny: '10px',
    small: '12px',
    medium: '16px',
    large: '18px',
    giant: '24px',
    massive: '32px',
    colossal: '48px',
};

export const ROW_HEIGHT_MAP: { [key: number]: string } = {
    [SIZE_BREAKPOINT.small]: '60px',
    [SIZE_BREAKPOINT.medium]: '80px',
    [SIZE_BREAKPOINT.large]: '80px',
    [SIZE_BREAKPOINT.xlarge]: '100px',
    [SIZE_BREAKPOINT.xxlarge]: '120px',
};
