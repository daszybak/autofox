import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAdPromotionInput } from './user-create-without-ad-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAdPromotionInput } from './user-create-or-connect-without-ad-promotion.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAdPromotionInput {

    @Field(() => UserCreateWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserCreateWithoutAdPromotionInput)
    create?: UserCreateWithoutAdPromotionInput;

    @Field(() => UserCreateOrConnectWithoutAdPromotionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAdPromotionInput)
    connectOrCreate?: UserCreateOrConnectWithoutAdPromotionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
