import { registerEnumType } from '@nestjs/graphql';

export enum BlogScalarFieldEnum {
    blog_id = "blog_id",
    created_at = "created_at",
    updated_at = "updated_at",
    deleted_at = "deleted_at",
    title = "title",
    slug = "slug",
    text = "text",
    language_cid = "language_cid",
    user_sub = "user_sub",
    moderation_flag = "moderation_flag"
}


registerEnumType(BlogScalarFieldEnum, { name: 'BlogScalarFieldEnum', description: undefined })
