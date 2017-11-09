export function formUrl(url: string, path: string, parameters?: {[key: string]: string}) {
    let finalUrl = url + path;

    if (!!parameters) {
        finalUrl = Object.keys(parameters).reduce((urlPath: string, parameter: string, index: number) => {
            return urlPath +
                ((index === 0) ? '?' : '&') +
                parameter + '=' + parameters[parameter];
        }, url + path);
    }

    return finalUrl;
}
