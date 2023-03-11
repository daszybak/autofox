import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdHouseCountAggregate {

    @Field(() => Int, {nullable:false})
    ad_house_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    meters!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
