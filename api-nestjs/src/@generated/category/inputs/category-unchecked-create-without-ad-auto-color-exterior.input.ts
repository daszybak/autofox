import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CategoryUncheckedCreateNestedManyWithoutParentInput } from './category-unchecked-create-nested-many-without-parent.input';
import { AdCategoryUncheckedCreateNestedManyWithoutCategoryInput } from '../../ad-category/inputs/ad-category-unchecked-create-nested-many-without-category.input';
import { AdAutoUncheckedCreateNestedManyWithoutCondition_typeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-condition-type.input';
import { AdAutoUncheckedCreateNestedManyWithoutVehicle_typeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-vehicle-type.input';
import { AdAutoUncheckedCreateNestedManyWithoutFuel_typeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-fuel-type.input';
import { AdAutoUncheckedCreateNestedManyWithoutTransmission_typeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-transmission-type.input';
import { AdAutoUncheckedCreateNestedManyWithoutMakeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-make.input';
import { AdAutoUncheckedCreateNestedManyWithoutModelInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-model.input';
import { AdAutoUncheckedCreateNestedManyWithoutBody_typeInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-body-type.input';
import { AdAutoUncheckedCreateNestedManyWithoutVariantInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-variant.input';
import { AdAutoUncheckedCreateNestedManyWithoutEmission_classInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-emission-class.input';
import { AdAutoUncheckedCreateNestedManyWithoutConditioningInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-conditioning.input';
import { AdAutoUncheckedCreateNestedManyWithoutColor_interiorInput } from '../../ad-auto/inputs/ad-auto-unchecked-create-nested-many-without-color-interior.input';
import { BlogUncheckedCreateNestedManyWithoutLanguageInput } from '../../blog/inputs/blog-unchecked-create-nested-many-without-language.input';
import { PromotionPlanUncheckedCreateNestedManyWithoutPromotion_regionInput } from '../../promotion-plan/inputs/promotion-plan-unchecked-create-nested-many-without-promotion-region.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryUncheckedCreateWithoutAdAutoColorExteriorInput {

    @Field(() => Int, {nullable:true})
    category_id?: number;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CategoryUncheckedCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput;

    @Field(() => Int, {nullable:true})
    parent_category_id?: number;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => AdCategoryUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    ad_categories?: AdCategoryUncheckedCreateNestedManyWithoutCategoryInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutCondition_typeInput, {nullable:true})
    AdAutoConditionType?: AdAutoUncheckedCreateNestedManyWithoutCondition_typeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutVehicle_typeInput, {nullable:true})
    AdAutoVehicleType?: AdAutoUncheckedCreateNestedManyWithoutVehicle_typeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutFuel_typeInput, {nullable:true})
    AdAutoFuelType?: AdAutoUncheckedCreateNestedManyWithoutFuel_typeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutTransmission_typeInput, {nullable:true})
    AdAutoTransmissionType?: AdAutoUncheckedCreateNestedManyWithoutTransmission_typeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutMakeInput, {nullable:true})
    AdAutoMake?: AdAutoUncheckedCreateNestedManyWithoutMakeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutModelInput, {nullable:true})
    AdAutoModel?: AdAutoUncheckedCreateNestedManyWithoutModelInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutBody_typeInput, {nullable:true})
    AdAutoBodyType?: AdAutoUncheckedCreateNestedManyWithoutBody_typeInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutVariantInput, {nullable:true})
    AdAutoVariant?: AdAutoUncheckedCreateNestedManyWithoutVariantInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutEmission_classInput, {nullable:true})
    AdAutoEmissionClass?: AdAutoUncheckedCreateNestedManyWithoutEmission_classInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutConditioningInput, {nullable:true})
    AdAutoConditioning?: AdAutoUncheckedCreateNestedManyWithoutConditioningInput;

    @Field(() => AdAutoUncheckedCreateNestedManyWithoutColor_interiorInput, {nullable:true})
    AdAutoColorInterior?: AdAutoUncheckedCreateNestedManyWithoutColor_interiorInput;

    @Field(() => BlogUncheckedCreateNestedManyWithoutLanguageInput, {nullable:true})
    Language?: BlogUncheckedCreateNestedManyWithoutLanguageInput;

    @Field(() => PromotionPlanUncheckedCreateNestedManyWithoutPromotion_regionInput, {nullable:true})
    @Type(() => PromotionPlanUncheckedCreateNestedManyWithoutPromotion_regionInput)
    PromotionRegion?: PromotionPlanUncheckedCreateNestedManyWithoutPromotion_regionInput;
}
