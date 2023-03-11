import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserPromotionCreateManyUserInput } from './user-promotion-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserPromotionCreateManyUserInputEnvelope {

    @Field(() => [UserPromotionCreateManyUserInput], {nullable:false})
    @Type(() => UserPromotionCreateManyUserInput)
    data!: Array<UserPromotionCreateManyUserInput>;
}
