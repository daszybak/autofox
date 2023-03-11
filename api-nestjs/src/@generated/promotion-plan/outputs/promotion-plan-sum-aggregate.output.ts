import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PromotionPlanSumAggregate {

    @Field(() => Int, {nullable:true})
    promotion_plan_id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Int, {nullable:true})
    validity_period?: number;

    @Field(() => Int, {nullable:true})
    promotion_region_cid?: number;

    @Field(() => Int, {nullable:true})
    promotion_plan_type?: number;
}
