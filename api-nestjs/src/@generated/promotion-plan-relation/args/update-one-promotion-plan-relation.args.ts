import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationUpdateInput } from '../inputs/promotion-plan-relation-update.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationWhereUniqueInput } from '../inputs/promotion-plan-relation-where-unique.input';

@ArgsType()
export class UpdateOnePromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationUpdateInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateInput)
    data!: PromotionPlanRelationUpdateInput;

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;
}
