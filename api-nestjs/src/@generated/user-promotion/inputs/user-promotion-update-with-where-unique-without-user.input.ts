import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from './user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionUpdateWithoutUserInput } from './user-promotion-update-without-user.input';

@InputType()
export class UserPromotionUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserPromotionUpdateWithoutUserInput)
    data!: UserPromotionUpdateWithoutUserInput;
}
