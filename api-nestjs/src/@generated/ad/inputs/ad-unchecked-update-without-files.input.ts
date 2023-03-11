import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { AdCategoryUncheckedUpdateManyWithoutAdNestedInput } from '../../ad-category/inputs/ad-category-unchecked-update-many-without-ad-nested.input';
import { AdAutoUncheckedUpdateOneWithoutAdNestedInput } from '../../ad-auto/inputs/ad-auto-unchecked-update-one-without-ad-nested.input';
import { AdHouseUncheckedUpdateOneWithoutAdNestedInput } from '../../ad-house/inputs/ad-house-unchecked-update-one-without-ad-nested.input';
import { ListAdUncheckedUpdateManyWithoutAdNestedInput } from '../../list-ad/inputs/list-ad-unchecked-update-many-without-ad-nested.input';
import { BoolFieldUpdateOperationsInput } from '../../prisma/inputs/bool-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableDecimalFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { AdPromotionUncheckedUpdateManyWithoutAdNestedInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-update-many-without-ad-nested.input';

@InputType()
export class AdUncheckedUpdateWithoutFilesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    ad_id?: IntFieldUpdateOperationsInput;

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

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    coords_latitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    coords_longitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    coords_radius?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    price_eurocent?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => AdCategoryUncheckedUpdateManyWithoutAdNestedInput, {nullable:true})
    ad_categories?: AdCategoryUncheckedUpdateManyWithoutAdNestedInput;

    @Field(() => AdAutoUncheckedUpdateOneWithoutAdNestedInput, {nullable:true})
    ad_auto?: AdAutoUncheckedUpdateOneWithoutAdNestedInput;

    @Field(() => AdHouseUncheckedUpdateOneWithoutAdNestedInput, {nullable:true})
    ad_house?: AdHouseUncheckedUpdateOneWithoutAdNestedInput;

    @Field(() => ListAdUncheckedUpdateManyWithoutAdNestedInput, {nullable:true})
    ListAd?: ListAdUncheckedUpdateManyWithoutAdNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_sold?: BoolFieldUpdateOperationsInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    price_rating?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => AdPromotionUncheckedUpdateManyWithoutAdNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedUpdateManyWithoutAdNestedInput;
}
