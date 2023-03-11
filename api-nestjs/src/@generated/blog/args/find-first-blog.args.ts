import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from '../inputs/blog-where.input';
import { Type } from 'class-transformer';
import { BlogOrderByWithRelationInput } from '../inputs/blog-order-by-with-relation.input';
import { BlogWhereUniqueInput } from '../inputs/blog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogScalarFieldEnum } from '../enums/blog-scalar-field.enum';

@ArgsType()
export class FindFirstBlogArgs {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => [BlogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlogOrderByWithRelationInput>;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    cursor?: BlogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogScalarFieldEnum>;
}
