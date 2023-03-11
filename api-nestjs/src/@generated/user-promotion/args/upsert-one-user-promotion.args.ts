import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionWhereUniqueInput } from '../inputs/user-promotion-where-unique.input';
import { Type } from 'class-transformer';
import { UserPromotionCreateInput } from '../inputs/user-promotion-create.input';
import { UserPromotionUpdateInput } from '../inputs/user-promotion-update.input';

@ArgsType()
export class UpsertOneUserPromotionArgs {

    @Field(() => UserPromotionWhereUniqueInput, {nullable:false})
    @Type(() => UserPromotionWhereUniqueInput)
    where!: UserPromotionWhereUniqueInput;

    @Field(() => UserPromotionCreateInput, {nullable:false})
    @Type(() => UserPromotionCreateInput)
    create!: UserPromotionCreateInput;

    @Field(() => UserPromotionUpdateInput, {nullable:false})
    @Type(() => UserPromotionUpdateInput)
    update!: UserPromotionUpdateInput;
}
