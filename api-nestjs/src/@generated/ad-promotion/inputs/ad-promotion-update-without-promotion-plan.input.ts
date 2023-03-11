import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUpdateOneRequiredWithoutAdPromotionNestedInput } from '../../ad/inputs/ad-update-one-required-without-ad-promotion-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutAdPromotionNestedInput } from '../../user/inputs/user-update-one-required-without-ad-promotion-nested.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';

@InputType()
export class AdPromotionUpdateWithoutPromotion_planInput {

    @Field(() => AdUpdateOneRequiredWithoutAdPromotionNestedInput, {nullable:true})
    @Type(() => AdUpdateOneRequiredWithoutAdPromotionNestedInput)
    ad?: AdUpdateOneRequiredWithoutAdPromotionNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutAdPromotionNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutAdPromotionNestedInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_from?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    valid_to?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    transaction_id?: NullableStringFieldUpdateOperationsInput;
}
