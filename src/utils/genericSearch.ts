// case insensitive search of n-number properties of type T
// returns true if at least one of the property values includes the query value
export function genericSearch<T>(
    object: T,
    properties: Array<keyof T>,
    query: string
): boolean {

    if (query === "") {
        return true;
    } 

    return properties.some((property) => {
        const value = object[property];
        if (typeof value === "string" || typeof value === "number") {
            return value.toString().toLowerCase().includes(query.toLowerCase());
        }
        return false;
    });
}