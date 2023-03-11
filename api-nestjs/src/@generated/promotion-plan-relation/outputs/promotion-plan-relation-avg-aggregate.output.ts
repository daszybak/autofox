import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PromotionPlanRelationAvgAggregate {

    @Field(() => Float, {nullable:true})
    parent_promotion_plan_id?: number;

    @Field(() => Float, {nullable:true})
    child_promotion_plan_id?: number;

    @Field(() => Float, {nullable:true})
    count?: number;

    @Field(() => Float, {nullable:true})
    reccurence?: number;
}
