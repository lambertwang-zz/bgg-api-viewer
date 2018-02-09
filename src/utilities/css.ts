export default function css(className: string, params?: { [key: string]: boolean }): string {
    if (!params) {
        return className;
    }

    let ret = className;
    for (const key in params) {
        if (params[key]) {
            ret += ' ' + key;
        }
    }
    return ret;
}
