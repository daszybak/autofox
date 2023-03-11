import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AdPromotionAvgAggregate {

    @Field(() => Float, {nullable:true})
    promotion_plan_id?: number;

    @Field(() => Float, {nullable:true})
    ad_id?: number;
}
