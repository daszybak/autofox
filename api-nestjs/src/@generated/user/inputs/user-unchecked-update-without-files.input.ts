import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { AdUncheckedUpdateManyWithoutUserNestedInput } from '../../ad/inputs/ad-unchecked-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { ListUncheckedUpdateManyWithoutUserNestedInput } from '../../list/inputs/list-unchecked-update-many-without-user-nested.input';
import { BlogUncheckedUpdateManyWithoutUserNestedInput } from '../../blog/inputs/blog-unchecked-update-many-without-user-nested.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserPromotionUncheckedUpdateManyWithoutUserNestedInput } from '../../user-promotion/inputs/user-promotion-unchecked-update-many-without-user-nested.input';
import { AdPromotionUncheckedUpdateManyWithoutUserNestedInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-update-many-without-user-nested.input';
import { MessagingChannelUncheckedUpdateManyWithoutUserNestedInput } from '../../messaging-channel/inputs/messaging-channel-unchecked-update-many-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutFilesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AdUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => AdUncheckedUpdateManyWithoutUserNestedInput)
    ads?: AdUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => ListUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    lists?: ListUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => BlogUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    blogs?: BlogUncheckedUpdateManyWithoutUserNestedInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;

    @Field(() => UserPromotionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    UserPromotion?: UserPromotionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => AdPromotionUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedUpdateManyWithoutUserNestedInput;

    @Field(() => MessagingChannelUncheckedUpdateManyWithoutUserNestedInput, {nullable:true})
    MessagingChannel?: MessagingChannelUncheckedUpdateManyWithoutUserNestedInput;
}
