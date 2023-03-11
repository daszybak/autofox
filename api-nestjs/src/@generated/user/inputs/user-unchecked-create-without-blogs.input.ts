import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdUncheckedCreateNestedManyWithoutUserInput } from '../../ad/inputs/ad-unchecked-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { FileUncheckedCreateNestedManyWithoutUserInput } from '../../file/inputs/file-unchecked-create-nested-many-without-user.input';
import { ListUncheckedCreateNestedManyWithoutUserInput } from '../../list/inputs/list-unchecked-create-nested-many-without-user.input';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserPromotionUncheckedCreateNestedManyWithoutUserInput } from '../../user-promotion/inputs/user-promotion-unchecked-create-nested-many-without-user.input';
import { AdPromotionUncheckedCreateNestedManyWithoutUserInput } from '../../ad-promotion/inputs/ad-promotion-unchecked-create-nested-many-without-user.input';
import { MessagingChannelUncheckedCreateNestedManyWithoutUserInput } from '../../messaging-channel/inputs/messaging-channel-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutBlogsInput {

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AdUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => AdUncheckedCreateNestedManyWithoutUserInput)
    ads?: AdUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => FileUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    files?: FileUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => ListUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    lists?: ListUncheckedCreateNestedManyWithoutUserInput;

    @HideField()
    moderation_flag?: number;

    @Field(() => UserPromotionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    UserPromotion?: UserPromotionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AdPromotionUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    AdPromotion?: AdPromotionUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => MessagingChannelUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    MessagingChannel?: MessagingChannelUncheckedCreateNestedManyWithoutUserInput;
}
