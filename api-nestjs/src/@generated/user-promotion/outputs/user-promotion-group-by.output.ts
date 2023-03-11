import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserPromotionCountAggregate } from './user-promotion-count-aggregate.output';
import { UserPromotionAvgAggregate } from './user-promotion-avg-aggregate.output';
import { UserPromotionSumAggregate } from './user-promotion-sum-aggregate.output';
import { UserPromotionMinAggregate } from './user-promotion-min-aggregate.output';
import { UserPromotionMaxAggregate } from './user-promotion-max-aggregate.output';

@ObjectType()
export class UserPromotionGroupBy {

    @Field(() => Int, {nullable:false})
    promotion_plan_id!: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => Date, {nullable:true})
    valid_from?: Date | string;

    @Field(() => Date, {nullable:true})
    valid_to?: Date | string;

    @Field(() => String, {nullable:true})
    transaction_id?: string;

    @Field(() => UserPromotionCountAggregate, {nullable:true})
    _count?: UserPromotionCountAggregate;

    @Field(() => UserPromotionAvgAggregate, {nullable:true})
    _avg?: UserPromotionAvgAggregate;

    @Field(() => UserPromotionSumAggregate, {nullable:true})
    _sum?: UserPromotionSumAggregate;

    @Field(() => UserPromotionMinAggregate, {nullable:true})
    _min?: UserPromotionMinAggregate;

    @Field(() => UserPromotionMaxAggregate, {nullable:true})
    _max?: UserPromotionMaxAggregate;
}
