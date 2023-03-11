import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionCreateManyInput } from '../inputs/user-promotion-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserPromotionArgs {

    @Field(() => [UserPromotionCreateManyInput], {nullable:false})
    @Type(() => UserPromotionCreateManyInput)
    data!: Array<UserPromotionCreateManyInput>;
}
