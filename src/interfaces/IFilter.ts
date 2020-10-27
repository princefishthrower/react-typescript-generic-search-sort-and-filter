export default interface IFilter<T> {
    property: keyof T;
    isTruthyPicked: boolean;
}