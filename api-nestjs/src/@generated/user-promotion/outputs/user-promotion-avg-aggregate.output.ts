import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class UserPromotionAvgAggregate {

    @Field(() => Float, {nullable:true})
    promotion_plan_id?: number;
}
