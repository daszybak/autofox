import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { PromotionPlanOrderByWithRelationInput } from '../../promotion-plan/inputs/promotion-plan-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class PromotionPlanRelationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    parent_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => PromotionPlanOrderByWithRelationInput, {nullable:true})
    @Type(() => PromotionPlanOrderByWithRelationInput)
    parent_promotion_plan?: PromotionPlanOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    child_promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => PromotionPlanOrderByWithRelationInput, {nullable:true})
    @Type(() => PromotionPlanOrderByWithRelationInput)
    child_promotion_plan?: PromotionPlanOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    count?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reccurence?: keyof typeof SortOrder;
}
