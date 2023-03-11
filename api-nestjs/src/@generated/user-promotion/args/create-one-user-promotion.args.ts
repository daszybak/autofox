import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionCreateInput } from '../inputs/user-promotion-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserPromotionArgs {

    @Field(() => UserPromotionCreateInput, {nullable:false})
    @Type(() => UserPromotionCreateInput)
    data!: UserPromotionCreateInput;
}
