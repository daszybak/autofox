import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdAutoSumAggregate {

    @Field(() => Int, {nullable:true})
    ad_auto_id?: number;

    @Field(() => Int, {nullable:true})
    ad_id?: number;

    @Field(() => Int, {nullable:true})
    condition_type_cid?: number;

    @Field(() => Int, {nullable:true})
    vehicle_type_cid?: number;

    @Field(() => Int, {nullable:true})
    fuel_type_cid?: number;

    @Field(() => Int, {nullable:true})
    transmission_type_cid?: number;

    @Field(() => Int, {nullable:true})
    make_cid?: number;

    @Field(() => Int, {nullable:true})
    model_cid?: number;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Int, {nullable:true})
    km?: number;

    @Field(() => Int, {nullable:true})
    power_kw?: number;

    @Field(() => Int, {nullable:true})
    body_type_cid?: number;

    @Field(() => Int, {nullable:true})
    variant_cid?: number;

    @Field(() => Int, {nullable:true})
    doors_num?: number;

    @Field(() => Int, {nullable:true})
    seats_num?: number;

    @Field(() => Int, {nullable:true})
    engine_displacement_cm3?: number;

    @Field(() => Int, {nullable:true})
    emission_class_cid?: number;

    @Field(() => Int, {nullable:true})
    battery_capacity_kwh?: number;

    @Field(() => Int, {nullable:true})
    conditioning_cid?: number;

    @Field(() => Int, {nullable:true})
    color_exterior_cid?: number;

    @Field(() => Int, {nullable:true})
    color_interior_cid?: number;
}
