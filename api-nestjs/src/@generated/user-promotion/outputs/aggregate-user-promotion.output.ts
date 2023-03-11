import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserPromotionCountAggregate } from './user-promotion-count-aggregate.output';
import { UserPromotionAvgAggregate } from './user-promotion-avg-aggregate.output';
import { UserPromotionSumAggregate } from './user-promotion-sum-aggregate.output';
import { UserPromotionMinAggregate } from './user-promotion-min-aggregate.output';
import { UserPromotionMaxAggregate } from './user-promotion-max-aggregate.output';

@ObjectType()
export class AggregateUserPromotion {

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
