import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUserPromotionNestedInput } from '../../user/inputs/user-update-one-required-without-user-promotion-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';

@InputType()
export class UserPromotionUpdateWithoutPromotion_planInput {

    @Field(() => UserUpdateOneRequiredWithoutUserPromotionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserPromotionNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    transaction_id?: NullableStringFieldUpdateOperationsInput;
}
