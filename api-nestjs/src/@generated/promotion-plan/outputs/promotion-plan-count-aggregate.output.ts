import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionPlanCountAggregate {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    validity_period!: number;

    @Field(() => Int, {nullable:false})
    promotion_region_cid!: number;

    @Field(() => Int, {nullable:false})
    promotion_plan_type!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
