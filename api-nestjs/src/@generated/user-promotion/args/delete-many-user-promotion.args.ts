import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionWhereInput } from '../inputs/user-promotion-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserPromotionArgs {

    @Field(() => UserPromotionWhereInput, {nullable:true})
    @Type(() => UserPromotionWhereInput)
    where?: UserPromotionWhereInput;
}
