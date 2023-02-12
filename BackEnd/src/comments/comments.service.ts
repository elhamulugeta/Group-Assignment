import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
    private comments: Comment[] = [];

    create(comment:Comment){
        this.comments.push(comment);
    }

    findAll():Comment[]{
        return this.comments;
    }
}

export interface Comment{
    id: string;
    content: string;
    author: string;
}
