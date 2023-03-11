import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../../prisma/inputs/int-with-aggregates-filter.input';

@InputType()
export class PromotionPlanRelationScalarWhereWithAggregatesInput {

    @Field(() => [PromotionPlanRelationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PromotionPlanRelationScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionPlanRelationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PromotionPlanRelationScalarWhereWithAggregatesInput>;

    @Field(() => [PromotionPlanRelationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PromotionPlanRelationScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    parent_promotion_plan_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    child_promotion_plan_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    count?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reccurence?: IntWithAggregatesFilter;
}
