import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';

@ObjectType()
export class AdHouse {

    @Field(() => ID, {nullable:false})
    ad_house_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Ad, {nullable:false})
    ad?: Ad;

    @Field(() => Int, {nullable:true})
    meters!: number | null;
}
