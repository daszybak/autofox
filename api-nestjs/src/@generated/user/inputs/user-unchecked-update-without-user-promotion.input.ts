import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { AdUncheckedUpdateManyWithoutUserNestedInput } from '../../ad/inputs/ad-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { FileUncheckedUpdateManyWithoutUserNestedInput } from '../../file/inputs/file-unchecked-update-many-without-user-nested.input';
import { ListUncheckedUpdateManyWithoutUserNestedInput } from '../../list/inputs/list-unchecked-update-many-without-user-nested.input';
import { BlogUncheckedUpdateManyWithoutUserNestedInput } from '../../blog/inputs/blog-unchecked-update-many-without-user-nested.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { AdPromotionUncheckedUpdateManyWithoutUserNestedInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-update-many-without-user-nested.input';
import { MessagingChannelUncheckedUpdateManyWithoutUserNestedInput } from '../../messaging-channel/inputs/messaging-channel-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutUserPromotionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AdUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => AdUncheckedUpdateManyWithoutUserNestedInput)
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => FileUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    files?: FileUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ListUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BlogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;

    @Field(() => AdPromotionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MessagingChannelUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    MessagingChannel?: MessagingChannelUncheckedUpdateManyWithoutUserNestedInput;
}
