import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CategoryCreateNestedManyWithoutParentInput } from './category-create-nested-many-without-parent.input';
import { CategoryCreateNestedOneWithoutChildrenInput } from './category-create-nested-one-without-children.input';
import { Int } from '@nestjs/graphql';
import { AdCategoryCreateNestedManyWithoutCategoryInput } from '../../ad-category/inputs/ad-category-create-nested-many-without-category.input';
import { AdAutoCreateNestedManyWithoutVehicle_typeInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-vehicle-type.input';
import { AdAutoCreateNestedManyWithoutFuel_typeInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-fuel-type.input';
import { AdAutoCreateNestedManyWithoutTransmission_typeInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-transmission-type.input';
import { AdAutoCreateNestedManyWithoutMakeInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-make.input';
import { AdAutoCreateNestedManyWithoutModelInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-model.input';
import { AdAutoCreateNestedManyWithoutBody_typeInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-body-type.input';
import { AdAutoCreateNestedManyWithoutVariantInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-variant.input';
import { AdAutoCreateNestedManyWithoutEmission_classInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-emission-class.input';
import { AdAutoCreateNestedManyWithoutConditioningInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-conditioning.input';
import { AdAutoCreateNestedManyWithoutColor_interiorInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-color-interior.input';
import { AdAutoCreateNestedManyWithoutColor_exteriorInput } from '../../ad-auto/inputs/ad-auto-create-nested-many-without-color-exterior.input';
import { BlogCreateNestedManyWithoutLanguageInput } from '../../blog/inputs/blog-create-nested-many-without-language.input';
import { PromotionPlanCreateNestedManyWithoutPromotion_regionInput } from '../../promotion-plan/inputs/promotion-plan-create-nested-many-without-promotion-region.input';
import { Type } from 'class-transformer';

@InputType()
export class CategoryCreateWithoutAdAutoConditionTypeInput {

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => Date, {nullable:true})
    deleted_at?: Date | string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CategoryCreateNestedManyWithoutParentInput, {nullable:true})
    children?: CategoryCreateNestedManyWithoutParentInput;

    @Field(() => CategoryCreateNestedOneWithoutChildrenInput, {nullable:true})
    parent?: CategoryCreateNestedOneWithoutChildrenInput;

    @Field(() => String, {nullable:true})
    icon?: string;

    @Field(() => String, {nullable:false})
    code!: string;

    @Field(() => Int, {nullable:true})
    weight?: number;

    @Field(() => AdCategoryCreateNestedManyWithoutCategoryInput, {nullable:true})
    ad_categories?: AdCategoryCreateNestedManyWithoutCategoryInput;

    @Field(() => AdAutoCreateNestedManyWithoutVehicle_typeInput, {nullable:true})
    AdAutoVehicleType?: AdAutoCreateNestedManyWithoutVehicle_typeInput;

    @Field(() => AdAutoCreateNestedManyWithoutFuel_typeInput, {nullable:true})
    AdAutoFuelType?: AdAutoCreateNestedManyWithoutFuel_typeInput;

    @Field(() => AdAutoCreateNestedManyWithoutTransmission_typeInput, {nullable:true})
    AdAutoTransmissionType?: AdAutoCreateNestedManyWithoutTransmission_typeInput;

    @Field(() => AdAutoCreateNestedManyWithoutMakeInput, {nullable:true})
    AdAutoMake?: AdAutoCreateNestedManyWithoutMakeInput;

    @Field(() => AdAutoCreateNestedManyWithoutModelInput, {nullable:true})
    AdAutoModel?: AdAutoCreateNestedManyWithoutModelInput;

    @Field(() => AdAutoCreateNestedManyWithoutBody_typeInput, {nullable:true})
    AdAutoBodyType?: AdAutoCreateNestedManyWithoutBody_typeInput;

    @Field(() => AdAutoCreateNestedManyWithoutVariantInput, {nullable:true})
    AdAutoVariant?: AdAutoCreateNestedManyWithoutVariantInput;

    @Field(() => AdAutoCreateNestedManyWithoutEmission_classInput, {nullable:true})
    AdAutoEmissionClass?: AdAutoCreateNestedManyWithoutEmission_classInput;

    @Field(() => AdAutoCreateNestedManyWithoutConditioningInput, {nullable:true})
    AdAutoConditioning?: AdAutoCreateNestedManyWithoutConditioningInput;

    @Field(() => AdAutoCreateNestedManyWithoutColor_interiorInput, {nullable:true})
    AdAutoColorInterior?: AdAutoCreateNestedManyWithoutColor_interiorInput;

    @Field(() => AdAutoCreateNestedManyWithoutColor_exteriorInput, {nullable:true})
    AdAutoColorExterior?: AdAutoCreateNestedManyWithoutColor_exteriorInput;

    @Field(() => BlogCreateNestedManyWithoutLanguageInput, {nullable:true})
    Language?: BlogCreateNestedManyWithoutLanguageInput;

    @Field(() => PromotionPlanCreateNestedManyWithoutPromotion_regionInput, {nullable:true})
    @Type(() => PromotionPlanCreateNestedManyWithoutPromotion_regionInput)
    PromotionRegion?: PromotionPlanCreateNestedManyWithoutPromotion_regionInput;
}
