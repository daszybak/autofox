import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { DecimalFieldUpdateOperationsInput } from '../../prisma/inputs/decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { PromotionPlanRelationUncheckedUpdateManyWithoutParent_promotion_planNestedInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-unchecked-update-many-without-parent-promotion-plan-nested.input';
import { PromotionPlanRelationUncheckedUpdateManyWithoutChild_promotion_planNestedInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-unchecked-update-many-without-child-promotion-plan-nested.input';
import { UserPromotionUncheckedUpdateManyWithoutPromotion_planNestedInput } from '../../user-promotion/inputs/user-promotion-unchecked-update-many-without-promotion-plan-nested.input';

@InputType()
export class PromotionPlanUncheckedUpdateWithoutAdPromotionInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    promotion_plan_id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    promotion_region_cid?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    promotion_plan_type?: IntFieldUpdateOperationsInput;

    @Field(() => PromotionPlanRelationUncheckedUpdateManyWithoutParent_promotion_planNestedInput, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationUncheckedUpdateManyWithoutParent_promotion_planNestedInput;

    @Field(() => PromotionPlanRelationUncheckedUpdateManyWithoutChild_promotion_planNestedInput, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationUncheckedUpdateManyWithoutChild_promotion_planNestedInput;

    @Field(() => UserPromotionUncheckedUpdateManyWithoutPromotion_planNestedInput, {nullable:true})
    UserPromotion?: UserPromotionUncheckedUpdateManyWithoutPromotion_planNestedInput;
}
