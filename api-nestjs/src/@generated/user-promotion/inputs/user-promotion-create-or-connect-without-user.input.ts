import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateWithoutUserInput } from './user-promotion-create-without-user.input';

@InputType()
export class UserPromotionCreateOrConnectWithoutUserInput {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionCreateWithoutUserInput, {nullable:false})
    @Type(() => UserPromotionCreateWithoutUserInput)
    create!: UserPromotionCreateWithoutUserInput;
}
