import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogCreateInput } from '../inputs/blog-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBlogArgs {

    @Field(() => BlogCreateInput, {nullable:false})
    @Type(() => BlogCreateInput)
    data!: BlogCreateInput;
}
