import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdHouseSumAggregate {

    @Field(() => Int, {nullable:true})
    ad_house_id?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => Int, {nullable:true})
    meters?: number;
}
