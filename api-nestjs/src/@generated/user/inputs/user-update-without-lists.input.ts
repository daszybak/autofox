import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../../prisma/inputs/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../../prisma/inputs/nullable-string-field-update-operations.input';
import { AdUpdateManyWithoutUserNestedInput } from '../../ad/inputs/ad-update-many-without-user-nested.input';
import { Type } from 'class-transformer';
import { FileUpdateManyWithoutUserNestedInput } from '../../file/inputs/file-update-many-without-user-nested.input';
import { BlogUpdateManyWithoutUserNestedInput } from '../../blog/inputs/blog-update-many-without-user-nested.input';
import { IntFieldUpdateOperationsInput } from '../../prisma/inputs/int-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { UserPromotionUpdateManyWithoutUserNestedInput } from '../../user-promotion/inputs/user-promotion-update-many-without-user-nested.input';
import { AdPromotionUpdateManyWithoutUserNestedInput } from '../../ad-promotion/inputs/ad-promotion-update-many-without-user-nested.input';
import { MessagingChannelUpdateManyWithoutUserNestedInput } from '../../messaging-channel/inputs/messaging-channel-update-many-without-user-nested.input';

@InputType()
export class UserUpdateWithoutListsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    user_sub?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AdUpdateManyWithoutUserNestedInput, {nullable:true})
    @Type(() => AdUpdateManyWithoutUserNestedInput)
    ads?: AdUpdateManyWithoutUserNestedInput;

    @Field(() => FileUpdateManyWithoutUserNestedInput, {nullable:true})
    files?: FileUpdateManyWithoutUserNestedInput;

    @Field(() => BlogUpdateManyWithoutUserNestedInput, {nullable:true})
    blogs?: BlogUpdateManyWithoutUserNestedInput;

    @HideField()
    moderation_flag?: IntFieldUpdateOperationsInput;

    @Field(() => UserPromotionUpdateManyWithoutUserNestedInput, {nullable:true})
    UserPromotion?: UserPromotionUpdateManyWithoutUserNestedInput;

    @Field(() => AdPromotionUpdateManyWithoutUserNestedInput, {nullable:true})
    AdPromotion?: AdPromotionUpdateManyWithoutUserNestedInput;

    @Field(() => MessagingChannelUpdateManyWithoutUserNestedInput, {nullable:true})
    MessagingChannel?: MessagingChannelUpdateManyWithoutUserNestedInput;
}
