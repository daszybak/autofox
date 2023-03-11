import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AdSumAggregate {

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => Float, {nullable:true})
    coords_latitude?: number;

    @Field(() => Float, {nullable:true})
    coords_longitude?: number;

    @Field(() => Int, {nullable:true})
    coords_radius?: number;

    @Field(() => Int, {nullable:true})
    price_eurocent?: number;

    @Field(() => Int, {nullable:true})
    moderation_flag?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price_rating?: Decimal;
}
