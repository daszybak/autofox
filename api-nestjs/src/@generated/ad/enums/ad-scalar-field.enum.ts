import { registerEnumType } from '@nestjs/graphql';

export enum AdScalarFieldEnum {
    ad_id = "ad_id",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at",
    title = "title",
    text = "text",
    coords_latitude = "coords_latitude",
    coords_longitude = "coords_longitude",
    coords_radius = "coords_radius",
    address = "address",
    price_eurocent = "price_eurocent",
    user_sub = "user_sub",
    is_sold = "is_sold",
    moderation_flag = "moderation_flag",
    price_rating = "price_rating"
}


registerEnumType(AdScalarFieldEnum, { name: 'AdScalarFieldEnum', description: undefined })
