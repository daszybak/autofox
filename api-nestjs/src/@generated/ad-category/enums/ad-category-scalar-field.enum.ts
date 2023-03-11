import { registerEnumType } from '@nestjs/graphql';

export enum AdCategoryScalarFieldEnum {
    ad_id = "ad_id",
    category_id = "category_id"
}


registerEnumType(AdCategoryScalarFieldEnum, { name: 'AdCategoryScalarFieldEnum', description: undefined })
