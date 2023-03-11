import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserPromotionInput } from './user-create-without-user-promotion.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserPromotionInput } from './user-create-or-connect-without-user-promotion.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserPromotionInput {

    @Field(() => UserCreateWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserCreateWithoutUserPromotionInput)
    create?: UserCreateWithoutUserPromotionInput;

    @Field(() => UserCreateOrConnectWithoutUserPromotionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserPromotionInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserPromotionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
