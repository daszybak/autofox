import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AdAvgAggregate {

    @Field(() => Float, {nullable:true})
    ad_id?: number;

    @Field(() => Float, {nullable:true})
    coords_latitude?: number;

    @Field(() => Float, {nullable:true})
    coords_longitude?: number;

    @Field(() => Float, {nullable:true})
    coords_radius?: number;

    @Field(() => Float, {nullable:true})
    price_eurocent?: number;

    @Field(() => Float, {nullable:true})
    moderation_flag?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price_rating?: Decimal;
}
