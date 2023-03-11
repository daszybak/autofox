import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AdCategoryCountAggregate } from './ad-category-count-aggregate.output';
import { AdCategoryAvgAggregate } from './ad-category-avg-aggregate.output';
import { AdCategorySumAggregate } from './ad-category-sum-aggregate.output';
import { AdCategoryMinAggregate } from './ad-category-min-aggregate.output';
import { AdCategoryMaxAggregate } from './ad-category-max-aggregate.output';

@ObjectType()
export class AdCategoryGroupBy {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    category_id!: number;

    @Field(() => AdCategoryCountAggregate, {nullable:true})
    _count?: AdCategoryCountAggregate;

    @Field(() => AdCategoryAvgAggregate, {nullable:true})
    _avg?: AdCategoryAvgAggregate;

    @Field(() => AdCategorySumAggregate, {nullable:true})
    _sum?: AdCategorySumAggregate;

    @Field(() => AdCategoryMinAggregate, {nullable:true})
    _min?: AdCategoryMinAggregate;

    @Field(() => AdCategoryMaxAggregate, {nullable:true})
    _max?: AdCategoryMaxAggregate;
}
