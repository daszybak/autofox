import { registerEnumType } from '@nestjs/graphql';

export enum PromotionPlanScalarFieldEnum {
    promotion_plan_id = "promotion_plan_id",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at",
    title = "title",
    text = "text",
    price = "price",
    validity_period = "validity_period",
    promotion_region_cid = "promotion_region_cid",
    promotion_plan_type = "promotion_plan_type"
}


registerEnumType(PromotionPlanScalarFieldEnum, { name: 'PromotionPlanScalarFieldEnum', description: undefined })
