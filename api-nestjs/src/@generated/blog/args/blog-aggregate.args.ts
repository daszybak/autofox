import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from '../inputs/blog-where.input';
import { Type } from 'class-transformer';
import { BlogOrderByWithRelationInput } from '../inputs/blog-order-by-with-relation.input';
import { BlogWhereUniqueInput } from '../inputs/blog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogCountAggregateInput } from '../inputs/blog-count-aggregate.input';
import { BlogAvgAggregateInput } from '../inputs/blog-avg-aggregate.input';
import { BlogSumAggregateInput } from '../inputs/blog-sum-aggregate.input';
import { BlogMinAggregateInput } from '../inputs/blog-min-aggregate.input';
import { BlogMaxAggregateInput } from '../inputs/blog-max-aggregate.input';

@ArgsType()
export class BlogAggregateArgs {

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

    @Field(() => BlogCountAggregateInput, {nullable:true})
    _count?: BlogCountAggregateInput;

    @Field(() => BlogAvgAggregateInput, {nullable:true})
    _avg?: BlogAvgAggregateInput;

    @Field(() => BlogSumAggregateInput, {nullable:true})
    _sum?: BlogSumAggregateInput;

    @Field(() => BlogMinAggregateInput, {nullable:true})
    _min?: BlogMinAggregateInput;

    @Field(() => BlogMaxAggregateInput, {nullable:true})
    _max?: BlogMaxAggregateInput;
}
