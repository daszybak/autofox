import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedOneWithoutAd_autoInput } from '../../ad/inputs/ad-create-nested-one-without-ad-auto.input';
import { Type } from 'class-transformer';
import { CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-vehicle-type.input';
import { CategoryCreateNestedOneWithoutAdAutoFuelTypeInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-fuel-type.input';
import { CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-transmission-type.input';
import { CategoryCreateNestedOneWithoutAdAutoMakeInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-make.input';
import { CategoryCreateNestedOneWithoutAdAutoModelInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-model.input';
import { Int } from '@nestjs/graphql';
import { CategoryCreateNestedOneWithoutAdAutoBodyTypeInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-body-type.input';
import { CategoryCreateNestedOneWithoutAdAutoVariantInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-variant.input';
import { CategoryCreateNestedOneWithoutAdAutoEmissionClassInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-emission-class.input';
import { CategoryCreateNestedOneWithoutAdAutoConditioningInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-conditioning.input';
import { CategoryCreateNestedOneWithoutAdAutoColorExteriorInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-color-exterior.input';
import { CategoryCreateNestedOneWithoutAdAutoColorInteriorInput } from '../../category/inputs/category-create-nested-one-without-ad-auto-color-interior.input';

@InputType()
export class AdAutoCreateWithoutCondition_typeInput {

    @Field(() => AdCreateNestedOneWithoutAd_autoInput, {nullable:false})
    @Type(() => AdCreateNestedOneWithoutAd_autoInput)
    ad!: AdCreateNestedOneWithoutAd_autoInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput, {nullable:true})
    vehicle_type?: CategoryCreateNestedOneWithoutAdAutoVehicleTypeInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoFuelTypeInput, {nullable:true})
    fuel_type?: CategoryCreateNestedOneWithoutAdAutoFuelTypeInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput, {nullable:true})
    transmission_type?: CategoryCreateNestedOneWithoutAdAutoTransmissionTypeInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoMakeInput, {nullable:true})
    make?: CategoryCreateNestedOneWithoutAdAutoMakeInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoModelInput, {nullable:true})
    model?: CategoryCreateNestedOneWithoutAdAutoModelInput;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:true})
    km?: number;

    @Field(() => Int, {nullable:true})
    power_kw?: number;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoBodyTypeInput, {nullable:true})
    body_type?: CategoryCreateNestedOneWithoutAdAutoBodyTypeInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoVariantInput, {nullable:true})
    variant?: CategoryCreateNestedOneWithoutAdAutoVariantInput;

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

    @Field(() => CategoryCreateNestedOneWithoutAdAutoEmissionClassInput, {nullable:true})
    emission_class?: CategoryCreateNestedOneWithoutAdAutoEmissionClassInput;

    @Field(() => Int, {nullable:true})
    battery_capacity_kwh?: number;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoConditioningInput, {nullable:true})
    conditioning?: CategoryCreateNestedOneWithoutAdAutoConditioningInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoColorExteriorInput, {nullable:true})
    color_exterior?: CategoryCreateNestedOneWithoutAdAutoColorExteriorInput;

    @Field(() => CategoryCreateNestedOneWithoutAdAutoColorInteriorInput, {nullable:true})
    color_interior?: CategoryCreateNestedOneWithoutAdAutoColorInteriorInput;
}
