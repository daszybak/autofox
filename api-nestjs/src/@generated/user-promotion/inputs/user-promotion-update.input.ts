import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput } from '../../promotion-plan/inputs/promotion-plan-update-one-required-without-user-promotion-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutUserPromotionNestedInput } from '../../user/inputs/user-update-one-required-without-user-promotion-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';

@InputType()
export class UserPromotionUpdateInput {

    @Field(() => PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput, {nullable:true})
    @Type(() => PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput)
    promotion_plan?: PromotionPlanUpdateOneRequiredWithoutUserPromotionNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserPromotionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserPromotionNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    transaction_id?: NullableStringFieldUpdateOperationsInput;
}
