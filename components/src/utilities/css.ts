export function css(className: string, params: { [key: string]: boolean }): string {
    let ret = className;
    for (const key in params) {
        if (params[key]) {
            ret += ' ' + key;
        }
    }
    return ret;
}
