import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';

@InputType()
export class AdPromotionUncheckedUpdateManyInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    promotion_plan_id?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ad_id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    transaction_id?: NullableStringFieldUpdateOperationsInput;
}
