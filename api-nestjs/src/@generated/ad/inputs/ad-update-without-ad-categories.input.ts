import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/date-time-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { UserUpdateOneWithoutAdsNestedInput } from '../../user/inputs/user-update-one-without-ads-nested.input';
import { AdAutoUpdateOneWithoutAdNestedInput } from '../../ad-auto/inputs/ad-auto-update-one-without-ad-nested.input';
import { AdHouseUpdateOneWithoutAdNestedInput } from '../../ad-house/inputs/ad-house-update-one-without-ad-nested.input';
import { FileUpdateManyWithoutAdNestedInput } from '../../file/inputs/file-update-many-without-ad-nested.input';
import { ListAdUpdateManyWithoutAdNestedInput } from '../../list-ad/inputs/list-ad-update-many-without-ad-nested.input';
import { BoolFieldUpdateOperationsInput } from '../../prisma/inputs/bool-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { NullableDecimalFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-decimal-field-update-operations.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateManyWithoutAdNestedInput } from '../../ad-promotion/inputs/ad-promotion-update-many-without-ad-nested.input';

@InputType()
export class AdUpdateWithoutAd_categoriesInput {

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

    @Field(() => UserUpdateOneWithoutAdsNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAdsNestedInput;

    @Field(() => AdAutoUpdateOneWithoutAdNestedInput, {nullable:true})
    ad_auto?: AdAutoUpdateOneWithoutAdNestedInput;

    @Field(() => AdHouseUpdateOneWithoutAdNestedInput, {nullable:true})
    ad_house?: AdHouseUpdateOneWithoutAdNestedInput;

    @Field(() => FileUpdateManyWithoutAdNestedInput, {nullable:true})
    files?: FileUpdateManyWithoutAdNestedInput;

    @Field(() => ListAdUpdateManyWithoutAdNestedInput, {nullable:true})
    ListAd?: ListAdUpdateManyWithoutAdNestedInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    is_sold?: BoolFieldUpdateOperationsInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;

    @Field(() => NullableDecimalFieldUpdateOperationsInput, {nullable:true})
    @Type(() => NullableDecimalFieldUpdateOperationsInput)
    price_rating?: NullableDecimalFieldUpdateOperationsInput;

    @Field(() => AdPromotionUpdateManyWithoutAdNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUpdateManyWithoutAdNestedInput;
}
