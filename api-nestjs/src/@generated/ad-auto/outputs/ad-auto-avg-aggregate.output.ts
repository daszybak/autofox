import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AdAutoAvgAggregate {

    @Field(() => Float, {nullable:true})
    ad_auto_id?: number;

    @Field(() => Float, {nullable:true})
    ad_id?: number;

    @Field(() => Float, {nullable:true})
    condition_type_cid?: number;

    @Field(() => Float, {nullable:true})
    vehicle_type_cid?: number;

    @Field(() => Float, {nullable:true})
    fuel_type_cid?: number;

    @Field(() => Float, {nullable:true})
    transmission_type_cid?: number;

    @Field(() => Float, {nullable:true})
    make_cid?: number;

    @Field(() => Float, {nullable:true})
    model_cid?: number;

    @Field(() => Float, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:true})
    km?: number;

    @Field(() => Float, {nullable:true})
    power_kw?: number;

    @Field(() => Float, {nullable:true})
    body_type_cid?: number;

    @Field(() => Float, {nullable:true})
    variant_cid?: number;

    @Field(() => Float, {nullable:true})
    doors_num?: number;

    @Field(() => Float, {nullable:true})
    seats_num?: number;

    @Field(() => Float, {nullable:true})
    engine_displacement_cm3?: number;

    @Field(() => Float, {nullable:true})
    emission_class_cid?: number;

    @Field(() => Float, {nullable:true})
    battery_capacity_kwh?: number;

    @Field(() => Float, {nullable:true})
    conditioning_cid?: number;

    @Field(() => Float, {nullable:true})
    color_exterior_cid?: number;

    @Field(() => Float, {nullable:true})
    color_interior_cid?: number;
}
