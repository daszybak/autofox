import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CategoryCount {

    @Field(() => Int, {nullable:false})
    children?: number;

    @Field(() => Int, {nullable:false})
    ad_categories?: number;

    @Field(() => Int, {nullable:false})
    AdAutoConditionType?: number;

    @Field(() => Int, {nullable:false})
    AdAutoVehicleType?: number;

    @Field(() => Int, {nullable:false})
    AdAutoFuelType?: number;

    @Field(() => Int, {nullable:false})
    AdAutoTransmissionType?: number;

    @Field(() => Int, {nullable:false})
    AdAutoMake?: number;

    @Field(() => Int, {nullable:false})
    AdAutoModel?: number;

    @Field(() => Int, {nullable:false})
    AdAutoBodyType?: number;

    @Field(() => Int, {nullable:false})
    AdAutoVariant?: number;

    @Field(() => Int, {nullable:false})
    AdAutoEmissionClass?: number;

    @Field(() => Int, {nullable:false})
    AdAutoConditioning?: number;

    @Field(() => Int, {nullable:false})
    AdAutoColorInterior?: number;

    @Field(() => Int, {nullable:false})
    AdAutoColorExterior?: number;

    @Field(() => Int, {nullable:false})
    Language?: number;

    @Field(() => Int, {nullable:false})
    PromotionRegion?: number;
}
