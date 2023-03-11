import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { CategoryUncheckedUpdateManyWithoutParentNestedInput } from './category-unchecked-update-many-without-parent-nested.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { AdCategoryUncheckedUpdateManyWithoutCategoryNestedInput } from '../../ad-category/inputs/ad-category-unchecked-update-many-without-category-nested.input';
import { AdAutoUncheckedUpdateManyWithoutCondition_typeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-condition-type-nested.input';
import { AdAutoUncheckedUpdateManyWithoutVehicle_typeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-vehicle-type-nested.input';
import { AdAutoUncheckedUpdateManyWithoutFuel_typeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-fuel-type-nested.input';
import { AdAutoUncheckedUpdateManyWithoutTransmission_typeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-transmission-type-nested.input';
import { AdAutoUncheckedUpdateManyWithoutMakeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-make-nested.input';
import { AdAutoUncheckedUpdateManyWithoutBody_typeNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-body-type-nested.input';
import { AdAutoUncheckedUpdateManyWithoutVariantNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-variant-nested.input';
import { AdAutoUncheckedUpdateManyWithoutEmission_classNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-emission-class-nested.input';
import { AdAutoUncheckedUpdateManyWithoutConditioningNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-conditioning-nested.input';
import { AdAutoUncheckedUpdateManyWithoutColor_interiorNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-color-interior-nested.input';
import { AdAutoUncheckedUpdateManyWithoutColor_exteriorNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-many-without-color-exterior-nested.input';
import { BlogUncheckedUpdateManyWithoutLanguageNestedInput } from '../../blog/inputs/blog-unchecked-update-many-without-language-nested.input';
import { PromotionPlanUncheckedUpdateManyWithoutPromotion_regionNestedInput } from '../../promotion-plan/inputs/promotion-plan-unchecked-update-many-without-promotion-region-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUncheckedUpdateWithoutAdAutoModelInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    category_id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUncheckedUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    parent_category_id?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    weight?: NullableIntFieldUpdateOperationsInput;

    @Field(() => AdCategoryUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    ad_categories?: AdCategoryUncheckedUpdateManyWithoutCategoryNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutCondition_typeNestedInput, {nullable:true})
    AdAutoConditionType?: AdAutoUncheckedUpdateManyWithoutCondition_typeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutVehicle_typeNestedInput, {nullable:true})
    AdAutoVehicleType?: AdAutoUncheckedUpdateManyWithoutVehicle_typeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutFuel_typeNestedInput, {nullable:true})
    AdAutoFuelType?: AdAutoUncheckedUpdateManyWithoutFuel_typeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutTransmission_typeNestedInput, {nullable:true})
    AdAutoTransmissionType?: AdAutoUncheckedUpdateManyWithoutTransmission_typeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutMakeNestedInput, {nullable:true})
    AdAutoMake?: AdAutoUncheckedUpdateManyWithoutMakeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutBody_typeNestedInput, {nullable:true})
    AdAutoBodyType?: AdAutoUncheckedUpdateManyWithoutBody_typeNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutVariantNestedInput, {nullable:true})
    AdAutoVariant?: AdAutoUncheckedUpdateManyWithoutVariantNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutEmission_classNestedInput, {nullable:true})
    AdAutoEmissionClass?: AdAutoUncheckedUpdateManyWithoutEmission_classNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutConditioningNestedInput, {nullable:true})
    AdAutoConditioning?: AdAutoUncheckedUpdateManyWithoutConditioningNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutColor_interiorNestedInput, {nullable:true})
    AdAutoColorInterior?: AdAutoUncheckedUpdateManyWithoutColor_interiorNestedInput;

    @Field(() => AdAutoUncheckedUpdateManyWithoutColor_exteriorNestedInput, {nullable:true})
    AdAutoColorExterior?: AdAutoUncheckedUpdateManyWithoutColor_exteriorNestedInput;

    @Field(() => BlogUncheckedUpdateManyWithoutLanguageNestedInput, {nullable:true})
    Language?: BlogUncheckedUpdateManyWithoutLanguageNestedInput;

    @Field(() => PromotionPlanUncheckedUpdateManyWithoutPromotion_regionNestedInput, {nullable:true})
    @Type(() => PromotionPlanUncheckedUpdateManyWithoutPromotion_regionNestedInput)
    PromotionRegion?: PromotionPlanUncheckedUpdateManyWithoutPromotion_regionNestedInput;
}
