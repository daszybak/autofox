import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationUpdateManyMutationInput } from '../inputs/promotion-plan-relation-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationWhereInput } from '../inputs/promotion-plan-relation-where.input';

@ArgsType()
export class UpdateManyPromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationUpdateManyMutationInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateManyMutationInput)
    data!: PromotionPlanRelationUpdateManyMutationInput;

    @Field(() => PromotionPlanRelationWhereInput, {nullable:true})
    @Type(() => PromotionPlanRelationWhereInput)
    where?: PromotionPlanRelationWhereInput;
}
