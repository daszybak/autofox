import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class AdMaxAggregate {

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    text?: string;

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

    @Field(() => String, {nullable:true})
    user_sub?: string;

    @Field(() => Boolean, {nullable:true})
    is_sold?: boolean;

    @Field(() => Int, {nullable:true})
    moderation_flag?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    price_rating?: Decimal;
}
