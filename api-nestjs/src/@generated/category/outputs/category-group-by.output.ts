import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryCountAggregate } from './category-count-aggregate.output';
import { CategoryAvgAggregate } from './category-avg-aggregate.output';
import { CategorySumAggregate } from './category-sum-aggregate.output';
import { CategoryMinAggregate } from './category-min-aggregate.output';
import { CategoryMaxAggregate } from './category-max-aggregate.output';

@ObjectType()
export class CategoryGroupBy {

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    parent_category_id?: number;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => CategoryCountAggregate, {nullable:true})
    _count?: CategoryCountAggregate;

    @Field(() => CategoryAvgAggregate, {nullable:true})
    _avg?: CategoryAvgAggregate;

    @Field(() => CategorySumAggregate, {nullable:true})
    _sum?: CategorySumAggregate;

    @Field(() => CategoryMinAggregate, {nullable:true})
    _min?: CategoryMinAggregate;

    @Field(() => CategoryMaxAggregate, {nullable:true})
    _max?: CategoryMaxAggregate;
}
