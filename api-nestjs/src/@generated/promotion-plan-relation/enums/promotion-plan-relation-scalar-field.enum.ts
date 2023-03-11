import { registerEnumType } from '@nestjs/graphql';

export enum PromotionPlanRelationScalarFieldEnum {
    parent_promotion_plan_id = "parent_promotion_plan_id",
    child_promotion_plan_id = "child_promotion_plan_id",
    count = "count",
    reccurence = "reccurence"
}


registerEnumType(PromotionPlanRelationScalarFieldEnum, { name: 'PromotionPlanRelationScalarFieldEnum', description: undefined })
