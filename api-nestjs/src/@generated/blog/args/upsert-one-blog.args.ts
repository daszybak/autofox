import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from '../inputs/blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateInput } from '../inputs/blog-create.input';
import { BlogUpdateInput } from '../inputs/blog-update.input';

@ArgsType()
export class UpsertOneBlogArgs {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: BlogWhereUniqueInput;

    @Field(() => BlogCreateInput, {nullable:false})
    @Type(() => BlogCreateInput)
    create!: BlogCreateInput;

    @Field(() => BlogUpdateInput, {nullable:false})
    @Type(() => BlogUpdateInput)
    update!: BlogUpdateInput;
}
