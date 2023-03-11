import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdPromotionSumAggregate {

    @Field(() => Int, {nullable:true})
    promotion_plan_id?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;
}
