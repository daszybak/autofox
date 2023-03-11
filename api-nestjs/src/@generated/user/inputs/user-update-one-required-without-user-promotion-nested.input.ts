import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPromotionInput } from './user-create-without-user-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPromotionInput } from './user-create-or-connect-without-user-promotion.input';
import { UserUpsertWithoutUserPromotionInput } from './user-upsert-without-user-promotion.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserPromotionInput } from './user-update-without-user-promotion.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserPromotionNestedInput {

    @Field(() => UserCreateWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPromotionInput)
    create?: UserCreateWithoutUserPromotionInput;

    @Field(() => UserCreateOrConnectWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPromotionInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPromotionInput;

    @Field(() => UserUpsertWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserPromotionInput)
    upsert?: UserUpsertWithoutUserPromotionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserUpdateWithoutUserPromotionInput)
    update?: UserUpdateWithoutUserPromotionInput;
}
