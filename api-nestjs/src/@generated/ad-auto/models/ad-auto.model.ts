import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Ad } from '../../ad/models/ad.model';
import { Category } from '../../category/models/category.model';

@ObjectType()
export class AdAuto {

    @Field(() => ID, {nullable:false})
    ad_auto_id!: number;

    @Field(() => Int, {nullable:false})
    ad_id!: number;

    @Field(() => Ad, {nullable:false})
    ad?: Ad;

    @Field(() => Int, {nullable:true})
    condition_type_cid!: number | null;

    @Field(() => Category, {nullable:true})
    condition_type?: Category | null;

    @Field(() => Int, {nullable:true})
    vehicle_type_cid!: number | null;

    @Field(() => Category, {nullable:true})
    vehicle_type?: Category | null;

    @Field(() => Int, {nullable:true})
    fuel_type_cid!: number | null;

    @Field(() => Category, {nullable:true})
    fuel_type?: Category | null;

    @Field(() => Int, {nullable:true})
    transmission_type_cid!: number | null;

    @Field(() => Category, {nullable:true})
    transmission_type?: Category | null;

    @Field(() => Int, {nullable:true})
    make_cid!: number | null;

    @Field(() => Category, {nullable:true})
    make?: Category | null;

    @Field(() => Int, {nullable:true})
    model_cid!: number | null;

    @Field(() => Category, {nullable:true})
    model?: Category | null;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:true})
    km!: number | null;

    @Field(() => Int, {nullable:true})
    power_kw!: number | null;

    @Field(() => Int, {nullable:true})
    body_type_cid!: number | null;

    @Field(() => Category, {nullable:true})
    body_type?: Category | null;

    @Field(() => Int, {nullable:true})
    variant_cid!: number | null;

    @Field(() => Category, {nullable:true})
    variant?: Category | null;

    @Field(() => Date, {nullable:true})
    registered_until!: Date | null;

    @Field(() => Int, {nullable:true})
    doors_num!: number | null;

    @Field(() => Int, {nullable:true})
    seats_num!: number | null;

    @Field(() => Boolean, {nullable:true})
    is_first_owner!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    is_service_book_available!: boolean | null;

    @Field(() => Boolean, {nullable:true})
    is_vehicle_garaged!: boolean | null;

    @Field(() => Int, {nullable:true})
    engine_displacement_cm3!: number | null;

    @Field(() => Int, {nullable:true})
    emission_class_cid!: number | null;

    @Field(() => Category, {nullable:true})
    emission_class?: Category | null;

    @Field(() => Int, {nullable:true})
    battery_capacity_kwh!: number | null;

    @Field(() => Int, {nullable:true})
    conditioning_cid!: number | null;

    @Field(() => Category, {nullable:true})
    conditioning?: Category | null;

    @Field(() => Int, {nullable:true})
    color_exterior_cid!: number | null;

    @Field(() => Category, {nullable:true})
    color_exterior?: Category | null;

    @Field(() => Int, {nullable:true})
    color_interior_cid!: number | null;

    @Field(() => Category, {nullable:true})
    color_interior?: Category | null;
}
