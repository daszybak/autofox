import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdPromotionInput } from './user-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdPromotionInput } from './user-create-or-connect-without-ad-promotion.input';
import { UserUpsertWithoutAdPromotionInput } from './user-upsert-without-ad-promotion.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutAdPromotionInput } from './user-update-without-ad-promotion.input';

@InputType()
export class UserUpdateOneRequiredWithoutAdPromotionNestedInput {

    @Field(() => UserCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserCreateWithoutAdPromotionInput)
    create?: UserCreateWithoutAdPromotionInput;

    @Field(() => UserCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdPromotionInput;

    @Field(() => UserUpsertWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserUpsertWithoutAdPromotionInput)
    upsert?: UserUpsertWithoutAdPromotionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserUpdateWithoutAdPromotionInput)
    update?: UserUpdateWithoutAdPromotionInput;
}
