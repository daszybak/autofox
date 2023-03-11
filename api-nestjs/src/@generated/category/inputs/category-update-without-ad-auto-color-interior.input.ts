import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { CategoryUpdateManyWithoutParentNestedInput } from './category-update-many-without-parent-nested.input';
import { CategoryUpdateOneWithoutChildrenNestedInput } from './category-update-one-without-children-nested.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { AdCategoryUpdateManyWithoutCategoryNestedInput } from '../../ad-category/inputs/ad-category-update-many-without-category-nested.input';
import { AdAutoUpdateManyWithoutCondition_typeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-condition-type-nested.input';
import { AdAutoUpdateManyWithoutVehicle_typeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-vehicle-type-nested.input';
import { AdAutoUpdateManyWithoutFuel_typeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-fuel-type-nested.input';
import { AdAutoUpdateManyWithoutTransmission_typeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-transmission-type-nested.input';
import { AdAutoUpdateManyWithoutMakeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-make-nested.input';
import { AdAutoUpdateManyWithoutModelNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-model-nested.input';
import { AdAutoUpdateManyWithoutBody_typeNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-body-type-nested.input';
import { AdAutoUpdateManyWithoutVariantNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-variant-nested.input';
import { AdAutoUpdateManyWithoutEmission_classNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-emission-class-nested.input';
import { AdAutoUpdateManyWithoutConditioningNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-conditioning-nested.input';
import { AdAutoUpdateManyWithoutColor_exteriorNestedInput } from '../../ad-auto/inputs/ad-auto-update-many-without-color-exterior-nested.input';
import { BlogUpdateManyWithoutLanguageNestedInput } from '../../blog/inputs/blog-update-many-without-language-nested.input';
import { PromotionPlanUpdateManyWithoutPromotion_regionNestedInput } from '../../promotion-plan/inputs/promotion-plan-update-many-without-promotion-region-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUpdateWithoutAdAutoColorInteriorInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateManyWithoutParentNestedInput, {nullable:true})
    children?: CategoryUpdateManyWithoutParentNestedInput;

    @Field(() => CategoryUpdateOneWithoutChildrenNestedInput, {nullable:true})
    parent?: CategoryUpdateOneWithoutChildrenNestedInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    icon?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    code?: StringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    weight?: NullableIntFieldUpdateOperationsInput;

    @Field(() => AdCategoryUpdateManyWithoutCategoryNestedInput, {nullable:true})
    ad_categories?: AdCategoryUpdateManyWithoutCategoryNestedInput;

    @Field(() => AdAutoUpdateManyWithoutCondition_typeNestedInput, {nullable:true})
    AdAutoConditionType?: AdAutoUpdateManyWithoutCondition_typeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutVehicle_typeNestedInput, {nullable:true})
    AdAutoVehicleType?: AdAutoUpdateManyWithoutVehicle_typeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutFuel_typeNestedInput, {nullable:true})
    AdAutoFuelType?: AdAutoUpdateManyWithoutFuel_typeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutTransmission_typeNestedInput, {nullable:true})
    AdAutoTransmissionType?: AdAutoUpdateManyWithoutTransmission_typeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutMakeNestedInput, {nullable:true})
    AdAutoMake?: AdAutoUpdateManyWithoutMakeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutModelNestedInput, {nullable:true})
    AdAutoModel?: AdAutoUpdateManyWithoutModelNestedInput;

    @Field(() => AdAutoUpdateManyWithoutBody_typeNestedInput, {nullable:true})
    AdAutoBodyType?: AdAutoUpdateManyWithoutBody_typeNestedInput;

    @Field(() => AdAutoUpdateManyWithoutVariantNestedInput, {nullable:true})
    AdAutoVariant?: AdAutoUpdateManyWithoutVariantNestedInput;

    @Field(() => AdAutoUpdateManyWithoutEmission_classNestedInput, {nullable:true})
    AdAutoEmissionClass?: AdAutoUpdateManyWithoutEmission_classNestedInput;

    @Field(() => AdAutoUpdateManyWithoutConditioningNestedInput, {nullable:true})
    AdAutoConditioning?: AdAutoUpdateManyWithoutConditioningNestedInput;

    @Field(() => AdAutoUpdateManyWithoutColor_exteriorNestedInput, {nullable:true})
    AdAutoColorExterior?: AdAutoUpdateManyWithoutColor_exteriorNestedInput;

    @Field(() => BlogUpdateManyWithoutLanguageNestedInput, {nullable:true})
    Language?: BlogUpdateManyWithoutLanguageNestedInput;

    @Field(() => PromotionPlanUpdateManyWithoutPromotion_regionNestedInput, {nullable:true})
    @Type(() => PromotionPlanUpdateManyWithoutPromotion_regionNestedInput)
    PromotionRegion?: PromotionPlanUpdateManyWithoutPromotion_regionNestedInput;
}
