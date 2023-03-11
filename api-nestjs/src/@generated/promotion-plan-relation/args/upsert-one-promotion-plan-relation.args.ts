import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PromotionPlanRelationWhereUniqueInput } from '../inputs/promotion-plan-relation-where-unique.input';
import { Type } from 'class-transformer';
import { PromotionPlanRelationCreateInput } from '../inputs/promotion-plan-relation-create.input';
import { PromotionPlanRelationUpdateInput } from '../inputs/promotion-plan-relation-update.input';

@ArgsType()
export class UpsertOnePromotionPlanRelationArgs {

    @Field(() => PromotionPlanRelationWhereUniqueInput, {nullable:false})
    @Type(() => PromotionPlanRelationWhereUniqueInput)
    where!: PromotionPlanRelationWhereUniqueInput;

    @Field(() => PromotionPlanRelationCreateInput, {nullable:false})
    @Type(() => PromotionPlanRelationCreateInput)
    create!: PromotionPlanRelationCreateInput;

    @Field(() => PromotionPlanRelationUpdateInput, {nullable:false})
    @Type(() => PromotionPlanRelationUpdateInput)
    update!: PromotionPlanRelationUpdateInput;
}
