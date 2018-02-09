export function getPrimaryName(thing: any): string {
    const {
        name,
    } = thing.tags;

    if (name instanceof Array) {
        for (const altName of name) {
            if (altName.type === 'primary') {
                return altName.value;
            }
        }

    } else {
        return name.value;
    }
    console.warn('Thing has no primary name');

    return '';
}
