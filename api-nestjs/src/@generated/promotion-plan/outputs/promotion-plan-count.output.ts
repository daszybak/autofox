import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PromotionPlanCount {

    @Field(() => Int, {nullable:false})
    ParentPromotionPlan?: number;

    @Field(() => Int, {nullable:false})
    ChildPromotionPlan?: number;

    @Field(() => Int, {nullable:false})
    AdPromotion?: number;

    @Field(() => Int, {nullable:false})
    UserPromotion?: number;
}
