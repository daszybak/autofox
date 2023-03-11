import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdCount {

    @Field(() => Int, {nullable:false})
    ad_categories?: number;

    @Field(() => Int, {nullable:false})
    files?: number;

    @Field(() => Int, {nullable:false})
    ListAd?: number;

    @Field(() => Int, {nullable:false})
    AdPromotion?: number;
}
