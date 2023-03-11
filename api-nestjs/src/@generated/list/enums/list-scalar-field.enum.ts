import { registerEnumType } from '@nestjs/graphql';

export enum ListScalarFieldEnum {
    list_id = "list_id",
    list_type = "list_type",
    title = "title",
    search_params = "search_params",
    is_notifiable_by_email = "is_notifiable_by_email",
    is_notifiable_by_push = "is_notifiable_by_push",
    is_notifiable_by_sms = "is_notifiable_by_sms",
    user_sub = "user_sub"
}


registerEnumType(ListScalarFieldEnum, { name: 'ListScalarFieldEnum', description: undefined })
