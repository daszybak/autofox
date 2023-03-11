import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from '../inputs/blog-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBlogArgs {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;
}
