export default interface ISorter<T> {
    property: Extract<keyof T, string | number | Date>;
    isDescending: boolean;
}