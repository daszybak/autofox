import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AdAutoCreateManyCondition_typeInput {

    @Field(() => Int, {nullable:false})
    ad_id!: number;

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

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:true})
    km?: number;

    @Field(() => Int, {nullable:true})
    power_kw?: number;

    @Field(() => Int, {nullable:true})
    body_type_cid?: number;

    @Field(() => Int, {nullable:true})
    variant_cid?: number;

    @Field(() => Date, {nullable:true})
    registered_until?: Date | string;

    @Field(() => Int, {nullable:true})
    doors_num?: number;

    @Field(() => Int, {nullable:true})
    seats_num?: number;

    @Field(() => Boolean, {nullable:true})
    is_first_owner?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_service_book_available?: boolean;

    @Field(() => Boolean, {nullable:true})
    is_vehicle_garaged?: boolean;

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
