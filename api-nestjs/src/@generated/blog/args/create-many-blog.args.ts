import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogCreateManyInput } from '../inputs/blog-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBlogArgs {

    @Field(() => [BlogCreateManyInput], {nullable:false})
    @Type(() => BlogCreateManyInput)
    data!: Array<BlogCreateManyInput>;
}
