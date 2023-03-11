import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserPromotionUpdateManyMutationInput } from '../inputs/user-promotion-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserPromotionWhereInput } from '../inputs/user-promotion-where.input';

@ArgsType()
export class UpdateManyUserPromotionArgs {

    @Field(() => UserPromotionUpdateManyMutationInput, {nullable:false})
    @Type(() => UserPromotionUpdateManyMutationInput)
    data!: UserPromotionUpdateManyMutationInput;

    @Field(() => UserPromotionWhereInput, {nullable:true})
    @Type(() => UserPromotionWhereInput)
    where?: UserPromotionWhereInput;
}
