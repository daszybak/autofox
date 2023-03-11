import { registerEnumType } from '@nestjs/graphql';

export enum AdPromotionScalarFieldEnum {
    promotion_plan_id = "promotion_plan_id",
    ad_id = "ad_id",
    user_sub = "user_sub",
    valid_from = "valid_from",
    valid_to = "valid_to",
    transaction_id = "transaction_id"
}


registerEnumType(AdPromotionScalarFieldEnum, { name: 'AdPromotionScalarFieldEnum', description: undefined })
