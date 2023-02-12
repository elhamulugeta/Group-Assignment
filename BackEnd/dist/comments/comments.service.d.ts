export declare class CommentsService {
    private comments;
    create(comment: Comment): void;
    findAll(): Comment[];
}
export interface Comment {
    id: string;
    content: string;
    author: string;
}
