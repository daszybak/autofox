import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class PromotionPlanAvgAggregate {

    @Field(() => Float, {nullable:true})
    promotion_plan_id?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Float, {nullable:true})
    validity_period?: number;

    @Field(() => Float, {nullable:true})
    promotion_region_cid?: number;

    @Field(() => Float, {nullable:true})
    promotion_plan_type?: number;
}
