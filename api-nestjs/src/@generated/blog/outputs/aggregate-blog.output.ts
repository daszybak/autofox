import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlogCountAggregate } from './blog-count-aggregate.output';
import { BlogAvgAggregate } from './blog-avg-aggregate.output';
import { BlogSumAggregate } from './blog-sum-aggregate.output';
import { BlogMinAggregate } from './blog-min-aggregate.output';
import { BlogMaxAggregate } from './blog-max-aggregate.output';

@ObjectType()
export class AggregateBlog {

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
