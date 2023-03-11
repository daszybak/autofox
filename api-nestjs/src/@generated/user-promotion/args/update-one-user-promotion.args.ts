import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionUpdateInput } from '../inputs/user-promotion-update.input';
import { Type } from 'class-transformer';
import { UserPromotionWhereUniqueInput } from '../inputs/user-promotion-where-unique.input';

@ArgsType()
export class UpdateOneUserPromotionArgs {

    @Field(() => UserPromotionUpdateInput, {nullable:false})
    @Type(() => UserPromotionUpdateInput)
    data!: UserPromotionUpdateInput;

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;
}
