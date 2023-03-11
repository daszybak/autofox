import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../../prisma/inputs/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { CategoryUpdateOneWithoutPromotionRegionNestedInput } from '../../category/inputs/category-update-one-without-promotion-region-nested.input';
import { PromotionPlanRelationUpdateManyWithoutParent_promotion_planNestedInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-update-many-without-parent-promotion-plan-nested.input';
import { PromotionPlanRelationUpdateManyWithoutChild_promotion_planNestedInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-update-many-without-child-promotion-plan-nested.input';
import { AdPromotionUpdateManyWithoutPromotion_planNestedInput } from '../../ad-promotion/inputs/ad-promotion-update-many-without-promotion-plan-nested.input';
import { UserPromotionUpdateManyWithoutPromotion_planNestedInput } from '../../user-promotion/inputs/user-promotion-update-many-without-promotion-plan-nested.input';

@InputType()
export class PromotionPlanUpdateInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    text?: StringFieldUpdateOperationsInput;

    @Field(() => DecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => DecimalFieldUpdateOperationsInput)
    price?: DecimalFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    validity_period?: IntFieldUpdateOperationsInput;

    @Field(() => CategoryUpdateOneWithoutPromotionRegionNestedInput, {nullable:true})
    promotion_region?: CategoryUpdateOneWithoutPromotionRegionNestedInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    promotion_plan_type?: IntFieldUpdateOperationsInput;

    @Field(() => PromotionPlanRelationUpdateManyWithoutParent_promotion_planNestedInput, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationUpdateManyWithoutParent_promotion_planNestedInput;

    @Field(() => PromotionPlanRelationUpdateManyWithoutChild_promotion_planNestedInput, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationUpdateManyWithoutChild_promotion_planNestedInput;

    @Field(() => AdPromotionUpdateManyWithoutPromotion_planNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUpdateManyWithoutPromotion_planNestedInput;

    @Field(() => UserPromotionUpdateManyWithoutPromotion_planNestedInput, {nullable:true})
    UserPromotion?: UserPromotionUpdateManyWithoutPromotion_planNestedInput;
}
