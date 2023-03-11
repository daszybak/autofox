import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../../prisma/enums/sort-order.enum';
import { PromotionPlanOrderByWithRelationInput } from '../../promotion-plan/inputs/promotion-plan-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { AdOrderByWithRelationInput } from '../../ad/inputs/ad-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../../user/inputs/user-order-by-with-relation.input';

@InputType()
export class AdPromotionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    promotion_plan_id?: keyof typeof SortOrder;

    @Field(() => PromotionPlanOrderByWithRelationInput, {nullable:true})
    @Type(() => PromotionPlanOrderByWithRelationInput)
    promotion_plan?: PromotionPlanOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    ad_id?: keyof typeof SortOrder;

    @Field(() => AdOrderByWithRelationInput, {nullable:true})
    @Type(() => AdOrderByWithRelationInput)
    ad?: AdOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    user_sub?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    valid_from?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    valid_to?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    transaction_id?: keyof typeof SortOrder;
}
