import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PromotionPlanRelationScalarWhereInput } from './promotion-plan-relation-scalar-where.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationUpdateManyMutationInput } from './promotion-plan-relation-update-many-mutation.input';

@InputType()
export class PromotionPlanRelationUpdateManyWithWhereWithoutParent_promotion_planInput {

    @Field(() => PromotionPlanRelationScalarWhereInput, {nullable:false})
    @Type(() => PromotionPlanRelationScalarWhereInput)
    where!: PromotionPlanRelationScalarWhereInput;

    @Field(() => PromotionPlanRelationUpdateManyMutationInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateManyMutationInput)
    data!: PromotionPlanRelationUpdateManyMutationInput;
}
