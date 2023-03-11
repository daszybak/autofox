import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateManyUserInput } from './blog-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BlogCreateManyUserInputEnvelope {

    @Field(() => [BlogCreateManyUserInput], {nullable:false})
    @Type(() => BlogCreateManyUserInput)
    data!: Array<BlogCreateManyUserInput>;
}
