import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogUpdateInput } from '../inputs/blog-update.input';
import { Type } from 'class-transformer';
import { BlogWhereUniqueInput } from '../inputs/blog-where-unique.input';

@ArgsType()
export class UpdateOneBlogArgs {

    @Field(() => BlogUpdateInput, {nullable:false})
    @Type(() => BlogUpdateInput)
    data!: BlogUpdateInput;

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;
}
