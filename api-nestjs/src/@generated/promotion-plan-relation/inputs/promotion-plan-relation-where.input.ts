import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../../prisma/inputs/int-filter.input';
import { PromotionPlanRelationFilter } from '../../promotion-plan/inputs/promotion-plan-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanRelationWhereInput {

    @Field(() => [PromotionPlanRelationWhereInput], {nullable:true})
    AND?: Array<PromotionPlanRelationWhereInput>;

    @Field(() => [PromotionPlanRelationWhereInput], {nullable:true})
    OR?: Array<PromotionPlanRelationWhereInput>;

    @Field(() => [PromotionPlanRelationWhereInput], {nullable:true})
    NOT?: Array<PromotionPlanRelationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    parent_promotion_plan_id?: IntFilter;

    @Field(() => PromotionPlanRelationFilter, {nullable:true})
    @Type(() => PromotionPlanRelationFilter)
    parent_promotion_plan?: PromotionPlanRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    child_promotion_plan_id?: IntFilter;

    @Field(() => PromotionPlanRelationFilter, {nullable:true})
    @Type(() => PromotionPlanRelationFilter)
    child_promotion_plan?: PromotionPlanRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    reccurence?: IntFilter;
}
