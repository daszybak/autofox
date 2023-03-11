import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    category_id = "category_id",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at",
    name = "name",
    parent_category_id = "parent_category_id",
    icon = "icon",
    code = "code",
    weight = "weight"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
