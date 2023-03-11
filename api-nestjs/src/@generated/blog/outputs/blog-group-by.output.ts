import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BlogCountAggregate } from './blog-count-aggregate.output';
import { BlogAvgAggregate } from './blog-avg-aggregate.output';
import { BlogSumAggregate } from './blog-sum-aggregate.output';
import { BlogMinAggregate } from './blog-min-aggregate.output';
import { BlogMaxAggregate } from './blog-max-aggregate.output';

@ObjectType()
export class BlogGroupBy {

    @Field(() => Int, {nullable:false})
    blog_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Int, {nullable:true})
    language_cid?: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => Int, {nullable:false})
    moderation_flag!: number;

    @Field(() => BlogCountAggregate, {nullable:true})
    _count?: BlogCountAggregate;

    @Field(() => BlogAvgAggregate, {nullable:true})
    _avg?: BlogAvgAggregate;

    @Field(() => BlogSumAggregate, {nullable:true})
    _sum?: BlogSumAggregate;

    @Field(() => BlogMinAggregate, {nullable:true})
    _min?: BlogMinAggregate;

    @Field(() => BlogMaxAggregate, {nullable:true})
    _max?: BlogMaxAggregate;
}
