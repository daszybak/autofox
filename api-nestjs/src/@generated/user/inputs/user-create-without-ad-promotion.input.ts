import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdCreateNestedManyWithoutUserInput } from '../../ad/inputs/ad-create-nested-many-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateNestedManyWithoutUserInput } from '../../file/inputs/file-create-nested-many-without-user.input';
import { ListCreateNestedManyWithoutUserInput } from '../../list/inputs/list-create-nested-many-without-user.input';
import { BlogCreateNestedManyWithoutUserInput } from '../../blog/inputs/blog-create-nested-many-without-user.input';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { UserPromotionCreateNestedManyWithoutUserInput } from '../../user-promotion/inputs/user-promotion-create-nested-many-without-user.input';
import { MessagingChannelCreateNestedManyWithoutUserInput } from '../../messaging-channel/inputs/messaging-channel-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutAdPromotionInput {

    @Field(() => String, {nullable:false})
    user_sub!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AdCreateNestedManyWithoutUserInput, {nullable:true})
    @Type(() => AdCreateNestedManyWithoutUserInput)
    ads?: AdCreateNestedManyWithoutUserInput;

    @Field(() => FileCreateNestedManyWithoutUserInput, {nullable:true})
    files?: FileCreateNestedManyWithoutUserInput;

    @Field(() => ListCreateNestedManyWithoutUserInput, {nullable:true})
    lists?: ListCreateNestedManyWithoutUserInput;

    @Field(() => BlogCreateNestedManyWithoutUserInput, {nullable:true})
    blogs?: BlogCreateNestedManyWithoutUserInput;

    @HideField()
    moderation_flag?: number;

    @Field(() => UserPromotionCreateNestedManyWithoutUserInput, {nullable:true})
    UserPromotion?: UserPromotionCreateNestedManyWithoutUserInput;

    @Field(() => MessagingChannelCreateNestedManyWithoutUserInput, {nullable:true})
    MessagingChannel?: MessagingChannelCreateNestedManyWithoutUserInput;
}
