import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionPlanRelationMaxAggregate {

    @Field(() => Int, {nullable:true})
    parent_promotion_plan_id?: number;

    @Field(() => Int, {nullable:true})
    child_promotion_plan_id?: number;

    @Field(() => Int, {nullable:true})
    count?: number;

    @Field(() => Int, {nullable:true})
    reccurence?: number;
}
