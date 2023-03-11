import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserPromotionInput } from './user-update-without-user-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPromotionInput } from './user-create-without-user-promotion.input';

@InputType()
export class UserUpsertWithoutUserPromotionInput {

    @Field(() => UserUpdateWithoutUserPromotionInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserPromotionInput)
    update!: UserUpdateWithoutUserPromotionInput;

    @Field(() => UserCreateWithoutUserPromotionInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPromotionInput)
    create!: UserCreateWithoutUserPromotionInput;
}
