import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserPromotionSumAggregate {

    @Field(() => Int, {nullable:true})
    promotion_plan_id?: number;
}
