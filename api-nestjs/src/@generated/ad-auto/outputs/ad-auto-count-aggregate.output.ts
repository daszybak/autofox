import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AdAutoCountAggregate {

    @Field(() => Int, {nullable:false})
    ad_auto_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Int, {nullable:false})
    condition_type_cid!: number;

    @Field(() => Int, {nullable:false})
    vehicle_type_cid!: number;

    @Field(() => Int, {nullable:false})
    fuel_type_cid!: number;

    @Field(() => Int, {nullable:false})
    transmission_type_cid!: number;

    @Field(() => Int, {nullable:false})
    make_cid!: number;

    @Field(() => Int, {nullable:false})
    model_cid!: number;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    km!: number;

    @Field(() => Int, {nullable:false})
    power_kw!: number;

    @Field(() => Int, {nullable:false})
    body_type_cid!: number;

    @Field(() => Int, {nullable:false})
    variant_cid!: number;

    @Field(() => Int, {nullable:false})
    registered_until!: number;

    @Field(() => Int, {nullable:false})
    doors_num!: number;

    @Field(() => Int, {nullable:false})
    seats_num!: number;

    @Field(() => Int, {nullable:false})
    is_first_owner!: number;

    @Field(() => Int, {nullable:false})
    is_service_book_available!: number;

    @Field(() => Int, {nullable:false})
    is_vehicle_garaged!: number;

    @Field(() => Int, {nullable:false})
    engine_displacement_cm3!: number;

    @Field(() => Int, {nullable:false})
    emission_class_cid!: number;

    @Field(() => Int, {nullable:false})
    battery_capacity_kwh!: number;

    @Field(() => Int, {nullable:false})
    conditioning_cid!: number;

    @Field(() => Int, {nullable:false})
    color_exterior_cid!: number;

    @Field(() => Int, {nullable:false})
    color_interior_cid!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
