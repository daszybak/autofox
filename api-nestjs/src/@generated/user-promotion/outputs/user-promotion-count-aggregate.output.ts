import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserPromotionCountAggregate {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    valid_from!: number;

    @Field(() => Int, {nullable:false})
    valid_to!: number;

    @Field(() => Int, {nullable:false})
    transaction_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
