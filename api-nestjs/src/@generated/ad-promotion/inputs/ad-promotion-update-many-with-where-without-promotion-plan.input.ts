import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AdPromotionScalarWhereInput } from './ad-promotion-scalar-where.input';
import { Type } from 'class-transformer';
import { AdPromotionUpdateManyMutationInput } from './ad-promotion-update-many-mutation.input';

@InputType()
export class AdPromotionUpdateManyWithWhereWithoutPromotion_planInput {

    @Field(() => AdPromotionScalarWhereInput, {nullable:false})
    @Type(() => AdPromotionScalarWhereInput)
    where!: AdPromotionScalarWhereInput;

    @Field(() => AdPromotionUpdateManyMutationInput, {nullable:false})
    @Type(() => AdPromotionUpdateManyMutationInput)
    data!: AdPromotionUpdateManyMutationInput;
}
