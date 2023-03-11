import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutAd_autoNestedInput } from '../../ad/inputs/ad-update-one-required-without-ad-auto-nested.input';
import { Type } from 'class-transformer';
import { CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-condition-type-nested.input';
import { CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-fuel-type-nested.input';
import { CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-transmission-type-nested.input';
import { CategoryUpdateOneWithoutAdAutoMakeNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-make-nested.input';
import { CategoryUpdateOneWithoutAdAutoModelNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-model-nested.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-body-type-nested.input';
import { CategoryUpdateOneWithoutAdAutoVariantNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-variant-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-bool-field-update-operations.input';
import { CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-emission-class-nested.input';
import { CategoryUpdateOneWithoutAdAutoConditioningNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-conditioning-nested.input';
import { CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-color-exterior-nested.input';
import { CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput } from '../../category/inputs/category-update-one-without-ad-auto-color-interior-nested.input';

@InputType()
export class AdAutoUpdateWithoutVehicle_typeInput {

    @Field(() => AdUpdateOneRequiredWithoutAd_autoNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutAd_autoNestedInput)
    ad?: AdUpdateOneRequiredWithoutAd_autoNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput, {nullable:true})
    condition_type?: CategoryUpdateOneWithoutAdAutoConditionTypeNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput, {nullable:true})
    fuel_type?: CategoryUpdateOneWithoutAdAutoFuelTypeNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput, {nullable:true})
    transmission_type?: CategoryUpdateOneWithoutAdAutoTransmissionTypeNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoMakeNestedInput, {nullable:true})
    make?: CategoryUpdateOneWithoutAdAutoMakeNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoModelNestedInput, {nullable:true})
    model?: CategoryUpdateOneWithoutAdAutoModelNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    year?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    km?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    power_kw?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput, {nullable:true})
    body_type?: CategoryUpdateOneWithoutAdAutoBodyTypeNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoVariantNestedInput, {nullable:true})
    variant?: CategoryUpdateOneWithoutAdAutoVariantNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    registered_until?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    doors_num?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    seats_num?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    is_first_owner?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    is_service_book_available?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    is_vehicle_garaged?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    engine_displacement_cm3?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput, {nullable:true})
    emission_class?: CategoryUpdateOneWithoutAdAutoEmissionClassNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    battery_capacity_kwh?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoConditioningNestedInput, {nullable:true})
    conditioning?: CategoryUpdateOneWithoutAdAutoConditioningNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput, {nullable:true})
    color_exterior?: CategoryUpdateOneWithoutAdAutoColorExteriorNestedInput;

    @Field(() => CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput, {nullable:true})
    color_interior?: CategoryUpdateOneWithoutAdAutoColorInteriorNestedInput;
}
