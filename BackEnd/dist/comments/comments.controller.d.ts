export declare class CommentsController {
    private comments;
    findAll(): Promise<any[]>;
    findOne(id: string): Promise<any>;
    create(comment: any): void;
    update(id: string, comment: any): any;
    remove(id: string): void;
}
