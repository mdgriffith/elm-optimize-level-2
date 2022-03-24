const invocationRegex = /^A(?<arity>[1-9]+[0-9]*)$/;
const wrapperRegex = /^F(?<arity>[1-9]+[0-9]*)$/;

/* Checks whether the function is a A2/A3/A4/... function and if so returns the arity.
 */
export function parseAXFunction(str: string) : number | null {
    const match = str.match(invocationRegex);
    if (match && match.groups) {
        return Number(match.groups.arity);
    }
    return null;
}

/* Checks whether the function is a F2/F3/F4/... function and if so returns the arity.
 */
export function parseFXFunction(str: string) : number | null {
    const match = str.match(wrapperRegex);
    if (match && match.groups) {
        return Number(match.groups.arity);
    }
    return null;
}
