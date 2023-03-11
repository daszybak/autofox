import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdCountAggregate {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    created_at!: number;

    @Field(() => Int, {nullable:false})
    updated_at!: number;

    @Field(() => Int, {nullable:false})
    deleted_at!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    text!: number;

    @Field(() => Int, {nullable:false})
    coords_latitude!: number;

    @Field(() => Int, {nullable:false})
    coords_longitude!: number;

    @Field(() => Int, {nullable:false})
    coords_radius!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    price_eurocent!: number;

    @Field(() => Int, {nullable:false})
    user_sub!: number;

    @Field(() => Int, {nullable:false})
    is_sold!: number;

    @Field(() => Int, {nullable:false})
    moderation_flag!: number;

    @Field(() => Int, {nullable:false})
    price_rating!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
