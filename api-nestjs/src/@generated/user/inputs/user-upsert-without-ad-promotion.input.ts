import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAdPromotionInput } from './user-update-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdPromotionInput } from './user-create-without-ad-promotion.input';

@InputType()
export class UserUpsertWithoutAdPromotionInput {

    @Field(() => UserUpdateWithoutAdPromotionInput, {nullable:false})
    @Type(() => UserUpdateWithoutAdPromotionInput)
    update!: UserUpdateWithoutAdPromotionInput;

    @Field(() => UserCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => UserCreateWithoutAdPromotionInput)
    create!: UserCreateWithoutAdPromotionInput;
}
