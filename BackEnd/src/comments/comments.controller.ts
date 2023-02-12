import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
    private comments = []; 


    @Get()
    async findAll(){
        return await this.comments;
    }

    @Get(':id')
    async findOne(@Param('id') id: string){
        return await this.comments.find(comment => comment.id === id);
    }

    @Post()
    create(@Body() comment: any){
        this.comments.push(comment);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() comment:any){
        const index = this.comments.findIndex(c => c.id === id);
        this.comments[index] = comment;
        return comment;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        this.comments = this.comments.filter(comment => comment.id != id);
    }
}
