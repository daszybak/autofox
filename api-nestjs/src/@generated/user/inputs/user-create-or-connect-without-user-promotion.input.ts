import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserPromotionInput } from './user-create-without-user-promotion.input';

@InputType()
export class UserCreateOrConnectWithoutUserPromotionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUserPromotionInput, {nullable:false})
    @Type(() => UserCreateWithoutUserPromotionInput)
    create!: UserCreateWithoutUserPromotionInput;
}
