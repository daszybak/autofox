import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAdPromotionInput } from './user-create-without-ad-promotion.input';

@InputType()
export class UserCreateOrConnectWithoutAdPromotionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutAdPromotionInput, {nullable:false})
    @Type(() => UserCreateWithoutAdPromotionInput)
    create!: UserCreateWithoutAdPromotionInput;
}
