import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanScalarWhereInput } from './promotion-plan-scalar-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanUpdateManyMutationInput } from './promotion-plan-update-many-mutation.input';

@InputType()
export class PromotionPlanUpdateManyWithWhereWithoutPromotion_regionInput {

    @Field(() => PromotionPlanScalarWhereInput, {nullable:false})
    @Type(() => PromotionPlanScalarWhereInput)
    where!: PromotionPlanScalarWhereInput;

    @Field(() => PromotionPlanUpdateManyMutationInput, {nullable:false})
    @Type(() => PromotionPlanUpdateManyMutationInput)
    data!: PromotionPlanUpdateManyMutationInput;
}
