export enum FONT_NAMES {
    DROID_SANS = 'Droid+Sans',
    MATERIAL_ICONS = 'Material+Icons',
}

export function loadGoogleFont(fontName: string, className: string = 'css') {
    const URL_PATH = 'https://fonts.googleapis.com/';
    let head = null;

    try {
        head = document.getElementsByTagName('head')[0];
    } catch (e) {
        console.error('Page not loaded');
        return;
    }

    const node = document.createElement('link');
    node.setAttribute('rel', 'stylesheet');
    node.setAttribute('href', URL_PATH + className + '?family=' + fontName);

    if (head.childNodes.length) {
        const firstChild = head.childNodes[0];
        head.insertBefore(node, firstChild);
    } else {
        head.appendChild(node);
    }
}
