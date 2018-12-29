export default interface IComment {
    id: number;
    firstName: string;
    lastName: string;
    comment: string;
    authorId: number;
    datePosed: number;
    authorAvatarUrl: string;
}