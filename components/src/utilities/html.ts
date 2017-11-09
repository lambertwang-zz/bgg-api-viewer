export function decodeHtml(input: string) {
    // Decode until length doesn't change
    let textSize = 0;
    let text = input;
    do {
        textSize = text.length;
        const doc = new DOMParser().parseFromString(text, 'text/html');
        text = doc.documentElement.textContent;
    } while (textSize !== text.length);

    return text;
}
