import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { AdCountAggregate } from './ad-count-aggregate.output';
import { AdAvgAggregate } from './ad-avg-aggregate.output';
import { AdSumAggregate } from './ad-sum-aggregate.output';
import { AdMinAggregate } from './ad-min-aggregate.output';
import { AdMaxAggregate } from './ad-max-aggregate.output';

@ObjectType()
export class AdGroupBy {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Date, {nullable:false})
    created_at!: Date | string;

    @Field(() => Date, {nullable:false})
    updated_at!: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    text!: string;

    @Field(() => Float, {nullable:true})
    coords_latitude?: number;

    @Field(() => Float, {nullable:true})
    coords_longitude?: number;

    @Field(() => Int, {nullable:true})
    coords_radius?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    price_eurocent?: number;

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => Boolean, {nullable:false})
    is_sold!: boolean;

    @Field(() => Int, {nullable:false})
    moderation_flag!: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price_rating?: Decimal;

    @Field(() => AdCountAggregate, {nullable:true})
    _count?: AdCountAggregate;

    @Field(() => AdAvgAggregate, {nullable:true})
    _avg?: AdAvgAggregate;

    @Field(() => AdSumAggregate, {nullable:true})
    _sum?: AdSumAggregate;

    @Field(() => AdMinAggregate, {nullable:true})
    _min?: AdMinAggregate;

    @Field(() => AdMaxAggregate, {nullable:true})
    _max?: AdMaxAggregate;
}
