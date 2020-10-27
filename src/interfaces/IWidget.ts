export default interface IWidget {
    title: string;
    description: string;
    id: number;
    rating: number;
    created: Date;
    updated: Date;
    isSpecialCard: boolean;
}