import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionPlanRelationCountAggregate {

    @Field(() => Int, {nullable:false})
    parent_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    child_promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    count!: number;

    @Field(() => Int, {nullable:false})
    reccurence!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
