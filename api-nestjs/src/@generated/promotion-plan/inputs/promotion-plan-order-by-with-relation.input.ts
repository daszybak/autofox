import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { CategoryOrderByWithRelationInput } from '../../category/inputs/category-order-by-with-relation.input';
import { PromotionPlanRelationOrderByRelationAggregateInput } from '../../promotion-plan-relation/inputs/promotion-plan-relation-order-by-relation-aggregate.input';
import { AdPromotionOrderByRelationAggregateInput } from '../../ad-promotion/inputs/ad-promotion-order-by-relation-aggregate.input';
import { UserPromotionOrderByRelationAggregateInput } from '../../user-promotion/inputs/user-promotion-order-by-relation-aggregate.input';

@InputType()
export class PromotionPlanOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    created_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updated_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deleted_at?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    text?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validity_period?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    promotion_region_cid?: keyof typeof SortOrder;

    @Field(() => CategoryOrderByWithRelationInput, {nullable:true})
    promotion_region?: CategoryOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_type?: keyof typeof SortOrder;

    @Field(() => PromotionPlanRelationOrderByRelationAggregateInput, {nullable:true})
    ParentPromotionPlan?: PromotionPlanRelationOrderByRelationAggregateInput;

    @Field(() => PromotionPlanRelationOrderByRelationAggregateInput, {nullable:true})
    ChildPromotionPlan?: PromotionPlanRelationOrderByRelationAggregateInput;

    @Field(() => AdPromotionOrderByRelationAggregateInput, {nullable:true})
    AdPromotion?: AdPromotionOrderByRelationAggregateInput;

    @Field(() => UserPromotionOrderByRelationAggregateInput, {nullable:true})
    UserPromotion?: UserPromotionOrderByRelationAggregateInput;
}
