import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AdPromotionUpdateManyMutationInput } from '../inputs/ad-promotion-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AdPromotionWhereInput } from '../inputs/ad-promotion-where.input';

@ArgsType()
export class UpdateManyAdPromotionArgs {

    @Field(() => AdPromotionUpdateManyMutationInput, {nullable:false})
    @Type(() => AdPromotionUpdateManyMutationInput)
    data!: AdPromotionUpdateManyMutationInput;

    @Field(() => AdPromotionWhereInput, {nullable:true})
    @Type(() => AdPromotionWhereInput)
    where?: AdPromotionWhereInput;
}
